import typeIndex from '../indexes/typeIndex';

export type baseRequest<T> = {
    collection: T,
    params: Record<string, any>
};

export type lang = {
    en: string,
    de: string,
    es: string,
    fr: string,
    it: string,
    tr: string
};

export type langs = keyof lang;

export type timingType = {
    'item-ms': number,
    'total-ms': number
}

export type collections = keyof typeIndex;

export type countableCollections = Exclude<collections,
    'charactersEvent'
    | 'charactersEventGrouped'
    | 'charactersFriend'
    | 'charactersItem'
    | 'charactersLeaderboard'
    | 'charactersOnlineStatus'
    | 'charactersWorld'
    | 'event'
    | 'leaderboard'
    | 'map'
    | 'worldEvent'>;

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

export type Tree<T> = Record<string, T[]>;

