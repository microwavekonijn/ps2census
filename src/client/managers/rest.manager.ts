import { Client } from '../census.client';
import { CensusRestException, CensusServerError, getFactory, GetMethod } from '../../rest';
import { Events } from '../constants';
import { MaxRetryException } from '../exceptions/max-retry.exception';
import { InferCollection, Query } from '../../rest/types/query';
import { Conditions, Format } from '../../rest/types/collection';
import { RestManagerOptions } from '../types';

export class RestManager {
    readonly getMethod: GetMethod;

    private readonly retries: number;

    constructor(
        private readonly client: Client,
        options?: RestManagerOptions,
    ) {
        this.getMethod = getFactory(client.environment, client.serviceId);

        this.retries = options?.retries ?? 2;
    }

    async get<Q extends Query<any, any>, C = InferCollection<Q>>(query: Q, conditions: Conditions<C>, options?: RestManagerOptions): Promise<Format<C>[]> {
        const retries = options && options.retries ? options.retries : this.retries;
        const attempts: (CensusRestException | CensusServerError)[] = [];

        do {
            this.client.emit(Events.DEBUG, `Fetching data using query ${JSON.stringify({query, conditions})}, attempt ${attempts.length}.`, this.constructor.name);

            try {
                return await this.getMethod(query, conditions);
            } catch (e) {
                attempts.push(e);
            }
        } while (attempts.length <= retries);

        throw new MaxRetryException(query, conditions, attempts);
    }
}
