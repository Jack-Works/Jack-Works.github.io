import react from 'react'
declare global {
    interface Window {
        readonly React: typeof import('react')
        readonly ReactDOM: typeof import('react-dom')
        readonly MaterialUI: typeof import('@material-ui/core')
        readonly marked: typeof import('marked')
        Data: IData
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
}
