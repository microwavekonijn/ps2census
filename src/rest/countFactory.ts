import axios from 'axios';
import { CensusServerError } from './exceptions/CensusServerError';
import { CensusRestException } from './exceptions/CensusRestException';
import { PS2Environment } from '../types/ps2.options';
import { InferCollection, Query } from './types/query';
import { Conditions, Countable } from './types/collection';

export type CountMethod = <Q extends Query<any, Countable>>(query: Q, conditions: Conditions<InferCollection<Q>>) => Promise<number>

export function countFactory(environment: PS2Environment, serviceId?: string): CountMethod {
    const census = axios.create({
        baseURL: serviceId
            ? `https://census.daybreakgames.com/s:${serviceId}/count/${environment}:v2`
            : `https://census.daybreakgames.com/count/${environment}:v2`,
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
