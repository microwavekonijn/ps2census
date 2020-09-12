import { censusRequest, collections } from '../../rest/utils/requestTypes';
import typeIndex from '../../rest/indexes/collectionIndex';
import limit from '../../rest/commands/limit';
import queryIndex from '../../rest/indexes/queryIndex';
import Client from '../Client';
import Cache from '../concerns/Cache';
import { Events } from '../utils/Constants';
import { hasLimitPerDB } from '../../rest/utils/commandHelpers';

export default class BaseManager<C extends collections> {
    private static readonly label = 'BaseManager';

    protected readonly requestObject: censusRequest<'character'>;

    public constructor(
        protected readonly client: Client,
        public readonly cache: Cache,
        requestObject: censusRequest<'character'>,
        protected readonly id: keyof queryIndex[C] & keyof typeIndex[C],
    ) {
        if ('c:tree' in requestObject.params || 'c:distinct' in requestObject.params)
            throw new Error(`Request object request will return unsupported responses(i.e. tree, distinct)`);

        if (hasLimitPerDB(requestObject))
            throw new Error(`Request object cannot be limited per DB`);

        this.requestObject = limit(requestObject, 1);
    }

    public async fetch(id: string): Promise<typeIndex[C]> {
        return this.cache.remember(id, () => this.makeRequest(id));
    }

    public async fetchFresh(id: string): Promise<typeIndex[C]> {
        await this.cache.forget(id);

        return this.fetch(id);
    }

    private async makeRequest(id: string) {
        this.client.emit(Events.DEBUG, `Fetching data for "${this.id}" => "${id}"(${this.constructor.name}).`, BaseManager.label);

        const data = await this.client.get(this.requestObject, {[this.id]: id});

        if (data.length <= 0)
            throw new Error(`Unable to retrieve data, api returned no matches for "${id}"`);

        return data[0];
    }
}
