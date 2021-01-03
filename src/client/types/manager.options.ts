import { Query } from '../../rest/types/query';
import { Character } from '../../rest/collections/character';
import { CacheContract } from '../concerns';

export interface RestManagerOptions {
    retries?: number;
}

export interface CharacterManagerOptions {
    request?: Query<Character['collection'], Character>,
    cache?: CacheContract,
}
