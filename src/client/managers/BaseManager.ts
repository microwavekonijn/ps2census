import { baseRequest } from '../../rest/utils/Types';
import typeIndex from '../../rest/indexes/typeIndex';
import { Get, MatchKeys } from '../../utils/Types';
import limit, { hasLimitPerDB } from '../../rest/commands/limit';
import queryIndex from '../../rest/indexes/queryIndex';
import Client from '../Client';
import Cache from '../concerns/Cache';

export default class BaseManager<C extends keyof typeIndex> {
    protected readonly requestObject: baseRequest<C>;

    protected readonly currentRequests: Map<string, Promise<any>> = new Map<string, Promise<any>>();

    public constructor(
        protected readonly client: Client,
        public readonly cache: Cache,
        requestObject: baseRequest<C>,
        protected readonly id: MatchKeys<Get<keyof typeIndex, C> & Get<queryIndex, C>, string>,
    ) {
        if ('c:tree' in requestObject.params || 'c:distinct' in requestObject.params)
            throw new Error(`Request object request will return unsupported responses(i.e. tree, distinct)`);

        if (hasLimitPerDB(requestObject))
            throw new Error(`Request object cannot be limited per DB`);

        this.requestObject = limit(requestObject, 1);
    }

    public async fetch(id: string): Promise<any> {
        return this.cache.remember(id, () => this.makeRequest(id));
    }

    public async fetchFresh(id: string): Promise<any> {
        await this.cache.forget(id);

        return this.fetch(id);
    }

    private async makeRequest(id: string): Promise<any> {
        return this.client.get(this.requestObject, {[this.id]: id});
    }
}
