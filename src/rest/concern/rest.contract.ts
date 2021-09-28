import {CollectionNames, Conditions, Params} from '../types/collection';
import {PS2Environment} from '../../types/ps2.options';
import {CensusGetResponse} from '../types/census';

export interface RestContract {
    /**
     * Run a count query
     *
     * @param environment
     * @param collection
     * @param query
     */
    count<C extends CollectionNames>(environment: PS2Environment, collection: C, query: Conditions<C>): Promise<number>;

    /**
     * Execute a get query directly
     *
     * @param environment
     * @param collection
     * @param params
     */
    get<C extends CollectionNames, R>(environment: PS2Environment, collection: C, params: Params<C>): Promise<CensusGetResponse<C, R>>;
}
