import { collections } from './request';
import { resolveIndex } from '../indexes/resolveIndex';

export type joinExpression = {
    type: collections,
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

export type limitCollections = Exclude<collections,
    'characters_friend'
    | 'characters_item'
    | 'characters_online_status'
    | 'characters_world'
    | 'map'>;

export type startCollections = Exclude<collections,
    'characters_event'
    | 'characterS_event_grouped'
    | 'characters_friend'
    | 'characters_item'
    | 'characters_online_status'
    | 'event'
    | 'characters_world'
    | 'map'
    | 'world_event'>;

export type baseCollections = Exclude<collections,
    'characters_event'
    | 'characterS_event_grouped'
    | 'characters_friend'
    | 'characters_item'
    | 'characters_leaderboard'
    | 'characters_online_status'
    | 'event'
    | 'leaderboard'
    | 'characters_world'
    | 'map'
    | 'world_event'>;

export type resolveCollections = keyof resolveIndex;
