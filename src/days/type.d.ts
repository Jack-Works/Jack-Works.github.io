export interface IData {
    title: string
    motto: string
    weekMessage: string
    data: ICard[]
}
export interface ICard {
    title?: string
    reference?: string
    content?: ITable | string | string[]
    progress?: { current: number; max?: number }
}
export interface ITable {
    head: string[]
    body: string[][]
}
