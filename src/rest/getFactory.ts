import axios from 'axios';
import { CensusServerError } from './exceptions/CensusServerError';
import { CensusRestException } from './exceptions/CensusRestException';
import { PS2Environment } from '../types/ps2.options';
import { InferCollection, Query } from './types/query';
import { Conditions, Format } from './types/collection';

export type GetMethod = <Q extends Query<any, any>, C = InferCollection<Q>>(query: Q, conditions: Conditions<C>) => Promise<Format<C>[]>;

export function getFactory(environment: PS2Environment, serviceId?: string): GetMethod {
    const census = axios.create({
        baseURL: serviceId
            ? `https://census.daybreakgames.com/s:${serviceId}/get/${environment}:v2`
            : `https://census.daybreakgames.com/get/${environment}:v2`,
        transformResponse(data) {
            data = JSON.parse(data);

            if (data.errorMessage || data.errorCode)
                throw new CensusServerError(data);

            if (data.error)
                throw new CensusRestException(data.error);

            return data;
        },
    });

    return ({collection, params}, conditions) =>
        census.get(collection, {params: {...params, ...conditions}})
            .then(({data}) => data[`${collection}_list`]);
}

