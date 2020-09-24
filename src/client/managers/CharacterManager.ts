import RestManager from './RestManager';
import Client from '../Client';
import Cache from '../concerns/Cache';
import { censusRequest } from '../../rest/utils/requestTypes';
import queryIndex from '../../rest/indexes/queryIndex';

export default class CharacterManager extends RestManager<'character'> {
    public constructor(
        client: Client,
        cache: Cache,
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
