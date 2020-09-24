import { censusRequest, collections } from '../../rest/utils/requestTypes';
import collectionIndex from '../../rest/indexes/collectionIndex';
import limit from '../../rest/commands/limit';
import queryIndex from '../../rest/indexes/queryIndex';
import Client from '../Client';
import Cache from '../concerns/Cache';
import { Events } from '../utils/Constants';
import { hasLimitPerDB } from '../../rest/utils/commandHelpers';

export default abstract class RestManager<C extends collections> {
    private static readonly label = 'RestManager';

    protected readonly request: censusRequest<C>;

    protected constructor(
        protected readonly client: Client,
        public readonly cache: Cache,
        request: censusRequest<C>,
    ) {
        if ('c:tree' in request.params || 'c:distinct' in request.params)
            throw new Error(`Request object request will return unsupported responses(i.e. tree, distinct)`);

        if (hasLimitPerDB(request))
            throw new Error(`Request object cannot be limited per DB`);

        this.request = limit(request, 1);
    }

    public async fetch(id: string): Promise<collectionIndex[C]> {
        return this.cache.remember(id, () => this.makeRequest(id));
    }

    public async fetchFresh(id: string): Promise<collectionIndex[C]> {
        await this.cache.forget(id);

        return this.fetch(id);
    }

    private async makeRequest(id: string) {
        const query = this.query(id);

        this.client.emit(Events.DEBUG, `Fetching data using query ${JSON.stringify(query)}(${this.constructor.name}).`, RestManager.label);

        const data = await this.client.get(this.request, query);

        if (data.length <= 0)
            throw new Error(`Unable to retrieve data, api returned no matches for "${id}"`);

        return data[0];
    }

    protected abstract query(id: string): queryIndex[C];
}