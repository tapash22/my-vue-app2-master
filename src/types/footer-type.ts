export interface FooterList{
    id:number | null
    name?:string | null
    logo?:string | null
    detailList?:Details[]
    info?:Info[]
}

export interface Details{
    id: number | null,
    name:string | null
    path: string | null
}

export interface Info{
    id: number | null,
    title:string | null
    details: string | null
}

export interface FooterLists extends Array<FooterList> {}