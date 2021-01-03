import axios from 'axios';
import { CensusServerError } from './exceptions/CensusServerError';
import { CensusRestException } from './exceptions/CensusRestException';
import { PS2Environment } from '../types/ps2.options';
import { InferCollection, Query } from './types/query';
import { Conditions, Countable } from './types/collection';
import { createBaseUrl } from './utils/urlHelper';

export type CountMethod = <Q extends Query<any, Countable>>(query: Q, conditions: Conditions<InferCollection<Q>>) => Promise<number>

export function countFactory(environment: PS2Environment, serviceId?: string | null, httpsOnly = true): CountMethod {
    const census = axios.create({
        baseURL: createBaseUrl('count', environment, httpsOnly, serviceId),
        transformResponse(data) {
            data = JSON.parse(data);

            if (data.errorMessage || data.errorCode)
                throw new CensusServerError(data);

            if (data.error)
                throw new CensusRestException(data.error);

            return data.count;
        },
    });

    return ({collection, params}, conditions) =>
        census.get(collection, {params: {...params, ...conditions}}).then(({data}: any) => data);
}
