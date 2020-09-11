import BaseManager from './BaseManager';
import Client from '../Client';
import Cache from '../concerns/Cache';
import { baseRequest } from '../../rest/utils/requestTypes';

export default class CharacterManager extends BaseManager<'character'> {
    public constructor(
        client: Client,
        cache: Cache,
        baseRequest: baseRequest<'character'>,
    ) {
        super(client, cache, baseRequest, 'character_id');
    }
}
