import typeIndex from '../indexes/collectionIndex';
import { joinType } from './commandTypes';
import { langs } from './responseTypes';

export type baseRequest<C extends collections> = {
    collection: C,
    commands: {
        caseSensitive?: boolean,
        distinct?: string,
        exactMatchFirst?: boolean,
        has?: string,
        hide?: string[],
        includeNull?: string,
        join?: joinType[],
        lang?: langs,
        limit?: number,
        limitPerDB?: number,
        resolve?: string[],
        retry?: boolean,
        show?: string,
        sort?: string,
        start?: string,
        timing?: string,
        tree?: string,
    },
    params: Record<string, any>,
};

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

type commands =
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

