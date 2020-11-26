import { BaseManager } from './base.manager';
import { Client } from '../census.client';
import { CacheContract } from '../concerns/cache.contract';
import { Query } from '../../rest/types/query';
import { Character } from '../../rest/collections/character';

export class CharacterManager extends BaseManager<Character['collection'], Character> {
    constructor(
        client: Client,
        cache: CacheContract,
        query: Query<Character['collection'], Character>,
    ) {
        super(client, cache, query);
    }

    protected conditions(id: string): Character['conditions'] {
        return {
            'character_id': id,
        };
    }
}
