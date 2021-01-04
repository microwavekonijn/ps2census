import { Collections, CollectionsMap } from './collections';
import { PartialPaths, Paths } from './format';

export type Commands =
    | 'case'
    | 'distinct'
    | 'exactMatchFirst'
    | 'has'
    | 'hide'
    | 'includeNull'
    | 'join'
    | 'lang'
    | 'limit'
    | 'limitPerDB'
    | 'resolve'
    | 'retry'
    | 'show'
    | 'sort'
    | 'start'
    | 'timing'
    | 'tree';

export interface JoinExpression<O extends Collections, T extends Collections> {
    type: T['collection'];
    on?: Paths<O>;
    to?: Paths<T['format']>;
    list?: boolean;
    inject_at?: string;
    terms?: Record<string, string>;
    outer?: boolean;
    show?: PartialPaths<T['format']>[];
    hide?: PartialPaths<T['format']>[];
}

export type Join<C extends Collections> = keyof Collections | JoinExpression<C> | [keyof Collections | JoinExpression<C>, Join<C>[]];

export type Sort = string | [string, 1 | -1];

export type Tree = {
    field: string,
    list?: 0 | 1,
    prefix?: string,
    start?: string
}

