export type baseOperations =
    'case'
    | 'distinct'
    | 'exactMatchFirst'
    | 'has'
    | 'hide'
    | 'includeNull'
    | 'join'
    | 'lang'
    | 'limit'
    | 'resolve'
    | 'retry'
    | 'show'
    | 'sort'
    | 'start'
    | 'timing'
    | 'tree';


export type baseRequest<Q, T, O extends baseOperations, R> = {
    type: string,
    extract?: (data: any) => T,
    params: Record<string, any>
}

