import axios from 'axios';
import { CensusServerError } from './exceptions/CensusServerError';
import { CensusRestException } from './exceptions/CensusRestException';
import { PS2Environment } from '../types/PS2';
import { countRequest } from './types/request';

export function countFactory(environment: PS2Environment, serviceId?: string): countRequest {
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

    return ({collection, params}, query) =>
        census.get(collection, {params: {...params, ...query}}).then(({data}: any) => data);
}
