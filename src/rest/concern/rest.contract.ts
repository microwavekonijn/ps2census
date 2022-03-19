import {CollectionNames, Conditions, Params} from '../types/collection';
import {CensusGetResponse} from '../types/census';

export interface RestContract {
    /**
     * Run a count query
     *
     * @param collection
     * @param query
     */
    count<C extends CollectionNames>(collection: C, query: Conditions<C>): Promise<number>;

    /**
     * Execute a get query directly
     *
     * @param collection
     * @param params
     */
    get<C extends CollectionNames, R>(collection: C, params: Params<C>): Promise<CensusGetResponse<C, R>>;
}
