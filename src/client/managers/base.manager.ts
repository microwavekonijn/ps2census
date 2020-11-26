import { CensusRequest, Collections } from '../../rest/types/request';
import { Collections } from '../../rest/types/collections';
import { queryIndex } from '../../rest/indexes/queryIndex';
import { Client } from '../census.client';
import { CacheContract } from '../concerns/cache.contract';
import { Events } from '../constants/client.constants';
import { hasLimit, hasLimitPerDB } from '../../rest/utils/commandHelpers';

export abstract class BaseManager<C extends Collections> {
    protected constructor(
        protected readonly client: Client,
        readonly cache: CacheContract,
        protected readonly request: CensusRequest<C>,
    ) {
        if ('c:tree' in request.params || 'c:distinct' in request.params)
            throw new Error(`Request object request will return unsupported responses(i.e. tree, distinct)`);

        if (hasLimitPerDB(request) || hasLimit(request))
            throw new Error(`Request object cannot be limited`);
    }

    async fetch(id: string): Promise<Collections[C]> {
        return this.cache.remember(id, () => this.makeRequest(id));
    }

    async fetchFresh(id: string): Promise<Collections[C]> {
        await this.cache.forget(id);

        return this.fetch(id);
    }

    private async makeRequest(id: string) {
        const query = this.query(id);

        this.client.emit(Events.DEBUG, `Fetching data using query ${JSON.stringify(query)}.`, this.constructor.name);

        const data = await this.client.get(this.request, query);

        if (data.length <= 0)
            throw new Error(`Unable to retrieve data, api returned no matches for "${id}"`);

        return data[0];
    }

    protected abstract query(id: string): queryIndex[C];
}
