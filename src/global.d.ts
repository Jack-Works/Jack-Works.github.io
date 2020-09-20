// declare module 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module' {
//     export * from 'lit-element'
// }
// declare module 'https://cdn.skypack.dev/remarkable/v2' {
//     const x: typeof import('remarkable')
//     export const Remarkable: typeof x
// }
// declare module 'https://unpkg.com/lit-html@1.1.2/lit-html.js?module' {
//     export * from 'lit-html'
// }
declare namespace JSX {
    interface IntrinsicElements {
        /**
         * @see ./resources/elements/markdown.js
         */
        // 'i-markdown': { value: string } & React.DetailedHTMLProps<
        //     React.HtmlHTMLAttributes<HTMLPreElement>,
        //     HTMLPreElement
        // >
        /**
         * For archived projects
         */
        'i-arch': {
            from: string
            to: string
            working: boolean
            badge?: boolean
        } & IntrinsicElements['div']
        /**
         * For special links
         */
        'i-a': IntrinsicElements['a']
        'can-i-use': { feature: string } & IntrinsicElements['div']
        /**
         * For experimental projects
         */
        'i-exp': { status: 'active' | 'success' | 'fail' } & IntrinsicElements['div']
        /**
         * Outdated
         */
        'i-dep': { to: string } & IntrinsicElements['div']
        /** Inline badges */
        'i-badge': { type: 'arch' } & IntrinsicElements['div']
    }
}
