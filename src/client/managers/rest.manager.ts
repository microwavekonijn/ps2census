import { CensusRequest, Collections, GetMethod } from '../../rest/types/request';
import { Client } from '../census.client';
import { CensusRestException, CensusServerError, getFactory } from '../../rest';
import { queryIndex } from '../../rest/indexes/queryIndex';
import { CensusResponse } from '../../rest/types/response';
import { Events } from '../constants';
import { MaxRetryException } from '../exceptions/max-retry.exception';

export class RestManager {
    readonly getMethod: GetMethod;

    private readonly retries: number;

    constructor(
        private readonly client: Client,
        options?: any,
    ) {
        this.getMethod = getFactory(client.environment, client.serviceId);

        this.retries = options?.retries ?? 2;
    }

    async get<C extends Collections, R extends CensusRequest<C>>(request: R, query: queryIndex[C], {retries = this.retries}: any): Promise<CensusResponse<C, R>> {

        let attempt = 0;
        const attempts: (CensusRestException | CensusServerError)[] = [];

        do {

            this.client.emit(Events.DEBUG, `Fetching data using query ${JSON.stringify(query)}, attempt ${attempt}.`, this.constructor.name);

            try {
                return await this.getMethod(request, query);
            } catch (e) {
                attempts.push(e);
            }
        } while (attempt++ <= retries);

        throw new MaxRetryException(request, query, attempts);
    }
}
