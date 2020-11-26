import { Client } from '../census.client';
import { CacheContract } from '../concerns/cache.contract';
import { Events } from '../constants/client.constants';
import { hasLimit, hasLimitPerDB } from '../../rest/utils/commandHelpers';
import { Query } from '../../rest/types/query';
import { Conditions, Format } from '../../rest/types/collection';

export abstract class BaseManager<N, C> {
    protected constructor(
        protected readonly client: Client,
        readonly cache: CacheContract,
        protected readonly query: Query<N, C>,
    ) {
        if ('c:tree' in query.params || 'c:distinct' in query.params)
            throw new Error(`Request object query will return unsupported responses(i.e. tree, distinct)`);

        if (hasLimitPerDB(query) || hasLimit(query))
            throw new Error(`query object cannot be limited`);
    }

    async fetch(id: string): Promise<Format<C>> {
        return this.cache.remember(id, () => this.makeRequest(id));
    }

    async fetchFresh(id: string): Promise<Format<C>> {
        await this.cache.forget(id);

        return this.fetch(id);
    }

    private async makeRequest(id: string) {
        const conditions = this.conditions(id);

        this.client.emit(Events.DEBUG, `Fetching data using query ${JSON.stringify(conditions)}.`, this.constructor.name);

        const data = await this.client.restManager.get(this.query, conditions, {});

        if (data.length <= 0)
            throw new Error(`Unable to retrieve data, api returned no matches for "${id}"`);

        return data[0];
    }

    protected abstract conditions(id: string): Conditions<C>;
}
