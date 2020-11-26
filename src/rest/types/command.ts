import { Collections } from './collections';

export type JoinExpression = {
    type: keyof Collections,
    on?: string,
    to?: string,
    list?: boolean,
    inject_at?: string,
    terms?: Record<string, string>,
    outer?: boolean,
    show?: string[],
    hide?: string[],
};

export type Join = string | JoinExpression | [string | JoinExpression, Join[]];

export type Sort = string | [string, 1 | -1];

export type Tree = {
    field: string,
    list?: 0 | 1,
    prefix?: string,
    start?: string
}

