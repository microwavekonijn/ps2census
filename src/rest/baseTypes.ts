export type operations = 'get' | 'count'

export type commands =
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


export type baseRequest<O extends operations, Q, T, C extends commands, R> = Readonly<{
    type: string,
    extract: (data: any) => T,
    params: Readonly<Record<string, any>>
}>

