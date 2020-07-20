export type baseOperations =
    'caseSensitive'
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
    params: Record<string, any>
}

