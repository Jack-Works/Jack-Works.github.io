# WebExtension with ESModule

Last updated: 05/19/2020

<i-exp status="active"></i-exp>

> Demo: [WebExtension ESModule test](https://github.com/Jack-Works/web-extension-esmodule-test)<br />
> In production: [DimensionDev/Maskbook: Experiment: Use ES Module to load scripts](https://github.com/DimensionDev/Maskbook/issues/221)

## TL;DR

### Chrome only

To use ESModule in WebExtension with Chrome, you're done. 🎇

In the background page, specify a HTML file and use `<script type="module">`.

In the content script, use `import(chrome.runtime.getURL('...'))`.

### About Firefox

To use ESModule in WebExtension with Firefox🦊, please wait for Firefox to fix [the bug][firefox content script import].

> Update on 05/19/2020: I'm tired of waiting for Mozilla to fix this, and I decided to compile the code into SystemJS. SystemJS is fully compatible with ES Modules (after transform) that supports live binding, `import.meta` and dynamic import. I write a custom SystemJS runtime for Web Extension: [@magic-works/webextension-systemjs](https://www.npmjs.com/package/@magic-works/webextension-systemjs)

### About node_modules

To use npm packages, notice that `snowpack` is not strong enough as the webpack to handle so many cases, it may fail to build your dependencies.

> Update on 05/19/2020: Since `snowpack` is not able to pack all dependencies in our project, I'm going to pack it by webpack and distribute them by UMD. I wrote [a custom typescript transformer](https://www.npmjs.com/package/@magic-works/ttypescript-browser-like-import-transformer) for converting `import`s into a UMD access. [Here is a template project](https://github.com/Jack-Works/ttsc-browser-import-template) to use it with webpack.

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

> Update on 05/19/2020: Please check out [neutrino-webextension](https://www.npmjs.com/package/neutrino-webextension), it's a Web Extension preset for Webpack that support chunk splitting or dynamic import.

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

[A Future Without Webpack: snowpack installs npm packages that run natively in the browser. Do you still need a bundler?](https://www.pika.dev/blog/pika-web-a-future-without-webpack/)

Experiment in production: [DimensionDev/Maskbook:feature/experiment-pika](https://github.com/DimensionDev/Maskbook/commit/12482c87c307cc06d7d7e63a7938733f3dcbc3d8) and there are 2(or 3) problems.

### Import path

Browsers only know how to load an absolute URL or relative URL and the `.js` cannot be omitted. But we already used to `import('lib')` or `import('./code')`. That's an easy problem to resolve. Pika provides a [babel plugin](https://github.com/pikapkg/web#quickstart) to do it but I'm going to use `tsc` to compile Maskbook thus I wrote a [TypeScript custom transformer](https://github.com/Jack-Works/ttypescript-browser-like-import-transformer) and load it by [ttypescript](https://github.com/cevek/ttypescript) to transform the `import` path .

#### Note on `import './file.json'`

<del>JSON import is rewritten to `data:application/javascript,export default {"json": "content"}`</del>

JSON import is rewritten to `const json = JSON.parse("JSON file content")`

> Update on 05/19/2020: Sorry for the mistake. The data url import is banned by the CSP in the extension environment. I switch to inline the JSON, see the example at [the document of @magic-works/ttypescript-browser-like-import-transformer](https://jack-works.github.io/ttypescript-browser-like-import-transformer/config.pluginconfigs.jsonimport.html).

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

> Update on 05/19/2020: Good news, you don't need to reinvent the wheel. [@magic-works/ttypescript-browser-like-import-transformer](https://jack-works.github.io/ttypescript-browser-like-import-transformer/config.pluginconfigs.folderimport.html) also supports folder import.

### 💥 No Tree-shaking

It seems impossible to use tree-shaking with `snowpack`. It doesn't scan your code to drop all unused dependencies. It tries to transform all packages in `dependencies` to ESModule in your `package.json`.

Full packages of `lodash-es`, `@material-ui/core` and `@material-ui/icons` are generated with a horrifying size.

<del>🤔 Doesn't know how to resolve it yet.</del>

> Update on 05/19/2020: Tree shaking is also supported now! ([Link to documentation](https://jack-works.github.io/ttypescript-browser-like-import-transformer/config.rewriterulesumd.treeshake.html))

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

[`snowpack` currently cannot config to omit some of the packages][snowpack opt deps]. And it will try to build everything even it is an optional dependency. This makes the compilation process slow even not available to work.

## Other related links

-   Agoric/realms-shim: [Any signal about supporting ESModules?](https://github.com/Agoric/realms-shim/issues/47)

[snowpack opt deps]: https://www.pika.dev/packages/snowpack/discuss/1113
[firefox content script import]: https://bugzilla.mozilla.org/show_bug.cgi?id=1536094
