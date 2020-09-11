export type joinExpression = {
    type: string,
    on?: string,
    to?: string,
    list?: boolean,
    inject_at?: string,
    terms?: Record<string, string>,
    outer?: boolean,
    show?: string[],
    hide?: string[],
};

export type joinType = string | joinExpression | [string | joinExpression, joinType[]];

export type sortType = string | [string, 1 | -1];

export type treeType = {
    field: string,
    list?: 0 | 1,
    prefix?: string,
    start?: string
}
