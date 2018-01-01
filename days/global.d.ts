import * as libreact from 'react'
import * as libreactdom from 'react-dom'
import * as libmaterial from 'material-ui'
import * as libmarked from 'marked'

declare global {
    interface Window {
        readonly React: typeof libreact
        readonly ReactDOM: typeof libreactdom
        readonly 'material-ui': typeof libmaterial
        readonly Material: typeof libmaterial
        readonly marked: typeof libmarked
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
