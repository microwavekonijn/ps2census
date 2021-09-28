import axios, {AxiosInstance} from 'axios';
import {CensusServerError} from './exceptions/census-server.error';
import {CensusRestException} from './exceptions/census-rest.exception';
import {PS2Environment} from '../types/ps2.options';
import {GetQuery} from './get.query';
import {CensusGetResponse} from './types/census';
import {CollectionNames, Conditions, Params} from './types/collection';
import {RestContract} from './concern/rest.contract';

export interface RestClientOptions {
    serviceId?: string;
    https?: boolean;
}

/**
 * A direct interface to interact with the Census api
 */
export class RestClient implements RestContract {
    static readonly CENSUS_HTTP = 'http://census.daybreakgames.com';
    static readonly CENSUS_HTTPS = 'https://census.daybreakgames.com';


    private api: AxiosInstance;

    constructor({serviceId, https = true}: RestClientOptions = {}) {
        let baseUrl = https ? RestClient.CENSUS_HTTPS : RestClient.CENSUS_HTTP;

        if (serviceId) baseUrl += `/s:${serviceId}`;
        else console.warn('RestClient is missing a ServiceID, it is recommended to use one. https://census.daybreakgames.com/#service-id');

        this.api = axios.create({
            baseURL: baseUrl,
            maxRedirects: 0,
            transformResponse(data) {
                data = JSON.parse(data);

                if (data.errorMessage || data.errorCode)
                    throw new CensusServerError(data);

                if (data.error)
                    throw new CensusRestException(data.error);

                return data;
            },
        });
    }

    /**
     * Create a new get query builder
     *
     * @param collection
     */
    getQueryBuilder<C extends CollectionNames>(collection: C): GetQuery<C> {
        return new GetQuery(this, collection);
    }

    /**
     * Run a count query
     *
     * @param environment
     * @param collection
     * @param query
     */
    async count<C extends CollectionNames>(environment: PS2Environment, collection: C, query: Conditions<C>): Promise<number> {
        const {data} = await this.api.get(
            `/count/${environment}:v2/${collection}`,
            {params: query},
        );

        return data.count;
    }

    /**
     * Execute a get query directly
     *
     * @param environment
     * @param collection
     * @param params
     */
    async get<C extends CollectionNames, R>(environment: PS2Environment, collection: C, params: Params<C>): Promise<CensusGetResponse<C, R>> {
        const {data} = await this.api.get(
            `/get/${environment}:v2/${collection}`,
            {params},
        );

        return data;
    }
}
