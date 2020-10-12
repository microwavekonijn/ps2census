import { collectionIndex } from '../indexes/collectionIndex';
import { queryIndex } from '../indexes/queryIndex';
import { censusResponse, langs } from './response';
import { joinType, sortType, treeType } from './command';

export type getMethod = <C extends collections, R extends censusRequest<C>>(request: R, query?: queryIndex[C]) => Promise<censusResponse<C, R>>;

export type countRequest = <C extends countableCollections>({collection, params}: censusRequest<C>, query?: queryIndex[C]) => Promise<number>

export interface censusRequest<C extends collections> {
    collection: C;
    params: Record<string, string | number | boolean>;

    caseSensitive?: boolean;
    distinct?: string;
    exactMatchFirst?: boolean;
    has?: string;
    hide?: string[];
    includeNull?: string;
    join?: joinType[];
    lang?: langs;
    limit?: number;
    limitPerDB?: number;
    resolve?: string[];
    retry?: boolean;
    show?: string[];
    sort?: sortType[];
    start?: number;
    timing?: boolean;
    tree?: treeType;
}

export interface censusDistinctRequest<C extends collections> extends censusRequest<C> {
    distinct: string;
}

export interface censusTreeRequest<C extends collections> extends censusRequest<C> {
    tree: treeType;
}

export type collections = keyof collectionIndex;

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
