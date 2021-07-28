import axios, {AxiosInstance} from 'axios';
import {CensusServerError} from './exceptions/census-server.error';
import {CensusRestException} from './exceptions/census-rest.exception';
import {PS2Environment} from '../types/ps2.options';
import {GetQuery} from './get.query';
import {CValue} from './types/census';
import {Conditions} from './types/collection';
import {Collections} from './collections';

export interface RestOptions {
    serviceId?: string;
    httpsOnly?: boolean;
}

export class RestClient {
    private api: AxiosInstance;

    constructor({serviceId, httpsOnly = true}: RestOptions = {}) {
        let baseUrl = `${httpsOnly ? 'https' : 'http'}://census.daybreakgames.com`;
        if (serviceId) baseUrl += `/s:${serviceId}`;

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

    get<C extends Collections>(collection: C): GetQuery<any> {
        return new GetQuery(this, collection);
    }

    async count<C extends Collections>(environment: PS2Environment, collection: C, query: Conditions<C>): Promise<number> {
        const {count} = await this.fetch<{ count: number }>(environment, 'count', collection, query);

        return count;
    }

    async fetch<T>(environment: PS2Environment, method: 'get' | 'count', collection: Collections, params: Record<string, CValue>): Promise<T> {
        const {data} = await this.api.get(
            `/${method}/${environment}:v2/${collection}`,
            {params}
        );

        return data;
    }
}