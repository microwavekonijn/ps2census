import typeIndex from '../indexes/collectionIndex';
import queryIndex from '../indexes/queryIndex';
import collectionIndex from '../indexes/collectionIndex';
// import { joinType, sortType, treeType } from './commandTypes';
// import { langs } from './responseTypes';

export type getMethod = <C extends collections>(request: censusRequest<C>, query: queryIndex[C]) => Promise<collectionIndex[C][]>;

export type countRequest = <C extends countableCollections>({collection, params}: censusRequest<C>, query: queryIndex[C]) => Promise<number>


export type censusRequest<C extends collections> = {
    collection: C,
    // commands?: {
    //     caseSensitive?: boolean,
    //     distinct?: string,
    //     exactMatchFirst?: boolean,
    //     has?: string,
    //     hide?: string[],
    //     includeNull?: string,
    //     join?: joinType[],
    //     lang?: langs,
    //     limit?: number,
    //     limitPerDB?: number,
    //     resolve?: string[],
    //     retry?: boolean,
    //     show?: string[],
    //     sort?: sortType[],
    //     start?: number,
    //     timing?: boolean,
    //     tree?: treeType,
    // },
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
