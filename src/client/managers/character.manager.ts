import { RestManager } from './rest.manager';
import { Client } from '../census.client';
import { CacheContract } from '../concerns/cache.contract';
import { censusRequest } from '../../rest/types/request';
import { queryIndex } from '../../rest/indexes/queryIndex';

export class CharacterManager extends RestManager<'character'> {
    public constructor(
        client: Client,
        cache: CacheContract,
        request: censusRequest<'character'>,
    ) {
        super(client, cache, request);
    }

    protected query(id: string): queryIndex['character'] {
        return {
            'character_id': id,
        };
    }
}
