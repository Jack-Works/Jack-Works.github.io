# @magic-works/ttypescript-browser-like-import-transformer

Emit code that works in browser by only a <sup>t</sup>typescript compiler. Compile bare import (where browser doesn't support) to a UMD variable access or a CDN that ships ES Module.

Before:

```js
import './polyfill'
import * as React from 'react'
```

After:

<!-- prettier-ignore -->
```js
import { __UMDBindCheck as __UMDBindCheck } from "https://cdn.jsdelivr.net/npm/@magic-works/ttypescript-browser-like-import-transformer@1.4.1/es/ttsclib.min.js";
const React = __UMDBindCheck(globalThis.React, [], "react", "globalThis.React", false);
import "./polyfill.js";
```

?> Checkout more detail at https://github.com/Jack-Works/ttypescript-browser-like-import-transformer/
