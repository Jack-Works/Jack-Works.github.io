# WebExtension with ESModule

?> Last updated: 10/1/2019

<i-exp status="active"></i-exp>

> Demo: [WebExtension ESModule test](https://github.com/Jack-Works/web-extension-esmodule-test)

> In production: [DimensionDev/Maskbook: Experiment: ESModule: A future without webpack](https://github.com/DimensionDev/Maskbook/issues/221)

## This experiment is currently blocked by

-   [ ] [dynamic module import doesn't work in webextension content scripts][firefox content script import]
-   [ ] @pika/discuss: [Support ignore field in commonjs support][pika web opt deps]

## TL;DR

### Chrome only

To use ESModule in WebExtension with Chrome, you're done. 🎇

In the background page, specify a HTML file and use `<script type="module">`.

In the content script, use `import(chrome.runtime.getURL('...'))`.

### About Firefox

To use ESModule in WebExtension with Firefox🦊, please wait for Firefox to fix [the bug][firefox content script import].

### About node_modules

To use npm packages, notice that `@pika/web` is not strong enough as the webpack to handle so many cases, it may fail to build your dependencies.

## Background

During the development of Maskbook, we encountered many problems with webpack chunk splitting.

There're 5 entries.

-   `Content script`: run in the isolated high privileged sandbox in the target page
-   `Background page`: run as the "server" of the extension
-   `Options page`: a normal webpage page but in the `-extension://` protocol
-   `Popup`: another normal webpage
-   `Workers`: do some heavy works

It is a common practice to share dependencies (like React) in different entries to reduce the size.
Webpack has built-in support for this so we turn it on.
Then the nightmare comes.

-   webpack wants to load chunks by injecting the `<script>` tag, which will let the chunk content goes into another environment instead of the isolated environment of content scripts. (Resolved by a hack on `HTMLScriptElement.prototype.src`)
-   Background page failed to load (forgot why.)
-   The Webpack-way of loading `import('...')` breaks our code (again I forgot why.)
-   ... and so many bugs caused by the chunk splitting

Chunk splitting is designed for normal webpages, not for WebExtension (which have it's own sandbox, protocol, CSP, etc...), and since it cause so many bugs in Maskbook thus decided to totally close the chunk splitting completely.
But we still need a way to share dependencies.

## But how to resolve it?

There are some nature ideas to resolve this problem.

-   Manually splitting the dependencies (this idea is too boring and I'm not going to talk about them. (but I'm still considering it before this experiment has succeeded))
-   Other module loaders like AMD (😕Nah, like living in the 19th century)
-   ESModule.

## (✔️) ESModule YES!

First, checkout the browser compatibility

<can-i-use feature="es6-module">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Browser_compatibility">of import at mdn.io</a>
</can-i-use>
<can-i-use feature="es6-module-dynamic-import"></can-i-use>

Nice. But that's for the normal webpage. Let's try it in WebExtension.

## (✔️) Background page

Firstly I tried the following code.

```ts
import './shared.js'
```

And failed with `Uncaught SyntaxError: Cannot use import statement outside a module`.

So the file need to be declared as ESModule. Renaming the file to `.mjs`, not working.

Looking for the document of `manifest.json`, but nowhere mentioned ESModule.
There is a field in the `background` section: [`manifest.json/background.page`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background). We can declare a HTML file for the background.

`background.html`:

```html
<script type="module" src="/background.js"></script>
```

And that's working!

Browser supporting:

|                      | Chrome | Firefox | Firefox for Android |
| -------------------- | ------ | ------- | ------------------- |
| `import { } from ''` | ✔️\*   | ✔️\*    | ❓                  |
| `import('')`         | ✔️\*   | ✔️\*    | ❓                  |

\*: Need to use a HTML file

## (❌ only works on Chrome!) Content script

Same as the background page, tried to run `import './shared.js'` directly.

And failed with `Uncaught SyntaxError: Cannot use import statement outside a module` again.

Unfortunately, solutions for the background page doesn't work for the content script.

Then I tried:

```ts
import('/content.js')
```

And failed with a network error. Chrome tries to load the script from `https://example.com/content.js` instead of `chrome-extension://extension-id/content.js`. Hmm, interesting 🤔, so I changed it to

```ts
import(chrome.runtime.getURL('/content.js'))
```

And it works! 🎇

**But, it doesn't work on Firefox.** Firefox throws `No ScriptLoader found for the current context`. What?

I searched the error message in the source code of Firefox on my co-workers' PC.

It shows when Firefox tries to execute `import(...)`, it needs a `ScriptLoader`(maybe for resource loading). The `ScriptLoader` comes from the `Document` and the `Document` comes from a `Window`.

By the document of WebExtension of [content script](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Content_script_environment), it indicates content script may not have its own `Document`.

By [globalThis in WebExtension content script doesn't implements Window](https://bugzilla.mozilla.org/show_bug.cgi?id=1577400) and [this !== window within content_scripts](https://bugzilla.mozilla.org/show_bug.cgi?id=1208775), content script even may not have its own `Window`!

I'm not familiar with C++ so I'm not able to debug it to confirm my hypothesis or fix it.

Now I'm blocked by [dynamic module import doesn't work in web extension content scripts][firefox content script import].

Browser supporting:

|                      | Chrome | Firefox | Firefox for Android |
| -------------------- | ------ | ------- | ------------------- |
| `import { } from ''` | ❌     | ❌      | ❓                  |
| `import('')`         | ✔️\*   | ❌      | ❓                  |

\*: Need to wrap with `chrome.runtime.getURL()`

## (✔️❌ partly works) Use npm modules in the browser

A GitHub organization `@pika/` has already made a solution for this.

[A Future Without Webpack: @pika/web installs npm packages that run natively in the browser. Do you still need a bundler?](https://www.pika.dev/blog/pika-web-a-future-without-webpack/)

Experiment in production: [DimensionDev/Maskbook:feature/experiment-pika](https://github.com/DimensionDev/Maskbook/commit/12482c87c307cc06d7d7e63a7938733f3dcbc3d8) and there are 2(or 3) problems.

### Import path

Browsers only know how to load an absolute URL or relative URL and the `.js` cannot be omitted. But we already used to `import('lib')` or `import('./code')`. That's an easy problem to resolve. Pika provides a [babel plugin](https://github.com/pikapkg/web#quickstart) to do it but I'm going to use `tsc` to compile Maskbook thus I wrote a [TypeScript custom transformer](https://github.com/DimensionDev/Maskbook/blob/12482c87c307cc06d7d7e63a7938733f3dcbc3d8/scripts/pika-builder.ts)(Notice: Maskbook is license by AGPLv3) and load it by [ttypescript](https://github.com/cevek/ttypescript) to transform the `import` path .

#### Note on `import './file.json'`

JSON import is written to `data:application/javascript,export default {"json": "content"}`

!> Dangerous! Should use `JSON.stringify` but it's okay for Maskbook.

#### Note on "folder import"

When writing `import './sth'` in TypeScript, this import declaration may means

-   `import './sth.js'`
-   `import './sth.jsx'`
-   `import './sth.ts'`
-   `import './sth.tsx'`
-   `import './sth/index.js'`
-   `import './sth/index.jsx'`
-   `import './sth/index.ts'`
-   `import './sth/index.tsx'`

When writing an path transform plugin, don't forget to cover all the cases!

### 💥 No Tree-shaking

It seems impossible to use tree-shaking with `@pika/web`. It doesn't scan your code to drop all unused dependencies. It tries to transform all packages in `dependencies` to ESModule in your `package.json`.

Full packages of `lodash-es`, `@material-ui/core` and `@material-ui/icons` are generated with a horrifying size.

🤔 Doesn't know how to resolve it yet.

### ❌ Cannot omit optional dependencies.

It's a common pattern to do in the npm packages.

```ts
try {
    // faster but need native binding
    require('./native')
} catch {
    // slower
    require('./js')
}
```

[`@pika/web` currently cannot config to omit some of the packages][pika web opt deps]. And it will try to build everything even it is an optional dependency. This makes the compilation process slow even not available to work.

## Other related links

-   Agoric/realms-shim: [Any signal about supporting ESModules?](https://github.com/Agoric/realms-shim/issues/47)

[pika web opt deps]: https://www.pika.dev/packages/@pika/web/discuss/1113
[firefox content script import]: https://bugzilla.mozilla.org/show_bug.cgi?id=1536094
