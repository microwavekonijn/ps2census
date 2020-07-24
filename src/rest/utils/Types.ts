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
export type ApplyOperation<E, O extends operations, Q, T, C extends commands, R> = E extends O ? baseRequest<O, Q, T, Exclude<C, E>, R> : never;

export type lang = {
    en: string,
    de: string,
    es: string,
    fr: string,
    it: string,
    tr: string
}
export type langs = keyof lang;

export type Tree<T> = Record<string, T[]>;
