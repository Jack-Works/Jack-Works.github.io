interface Document {
    adoptedStyleSheets?: readonly CSSStyleSheet[]
}
interface ShadowRoot {
    adoptedStyleSheets?: readonly CSSStyleSheet[]
}
interface CSSStyleSheet {
    replace(css: string): Promise<void>
    replaceSync(css: string): void
}
declare module 'https://cdn.skypack.dev/@ax-design/reveal-highlight' {
    export function register(options?: { compat: boolean }): void
}

declare module 'https://cdn.skypack.dev/@ax-design/acrylic' {
    export function register(): void
}

declare module 'https://cdn.skypack.dev/@ax-design/pressure' {
    export function register(): void
}

declare module 'https://cdn.skypack.dev/@ax-design/elevation' {
    export function register(): void
}
