import axios from 'axios';
import { CensusServerError } from './exceptions/CensusServerError';
import { CensusRestException } from './exceptions/CensusRestException';
import { PS2Environment } from '../types/ps2.options';
import { InferCollection, Query } from './types/query';
import { Conditions, Format } from './types/collection';
import { CensusResponse } from './censusResponse';
import { createBaseUrl } from './utils/urlHelper';

export type GetMethod = <Q extends Query<any, any>, C = InferCollection<Q>>(query: Q, conditions: Conditions<C>) => Promise<CensusResponse<Format<C>>>;

export function getFactory(environment: PS2Environment, serviceId?: string | null, httpsOnly = true): GetMethod {
    const census = axios.create({
        baseURL: createBaseUrl('get', environment, httpsOnly, serviceId),
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
            .then(({data}) => new CensusResponse(collection, data));
}
