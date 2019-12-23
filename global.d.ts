declare module 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module' {
    export * from 'lit-element'
}
declare module 'https://cdn.pika.dev/remarkable/v2' {
    const x: typeof import('remarkable')
    export const Remarkable: typeof x
}
declare module 'https://unpkg.com/lit-html@1.1.2/lit-html.js?module' {
    export * from 'lit-html'
}
interface IData {
    title: string
    motto: string
    weekMessage: string
    data: ICard[]
}
interface ICard {
    title?: string
    reference?: string
    content?: ITable | string | string[]
    progress?: { current: number; max?: number }
}
interface ITable {
    head: string[]
    body: string[][]
}
declare const MaterialUI: typeof import('@material-ui/core')

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
        'i-dep': { from: string; to: string } & IntrinsicElements['div']
    }
}
