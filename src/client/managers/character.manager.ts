import { BaseManager } from './base.manager';
import { Client } from '../census.client';
import { CacheContract } from '../concerns/cache.contract';
import { CensusRequest } from '../../rest/types/request';
import { queryIndex } from '../../rest/indexes/queryIndex';

export class CharacterManager extends BaseManager<'character'> {
    constructor(
        client: Client,
        cache: CacheContract,
        request: CensusRequest<'character'>,
    ) {
        super(client, cache, request);
    }

    protected query(id: string): queryIndex['character'] {
        return {
            'character_id': id,
        };
    }
}
