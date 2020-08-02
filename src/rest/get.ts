import axios from 'axios';
import CensusServerError from './exceptions/CensusServerError';
import CensusRestException from './exceptions/CensusRestException';
import { PS2Environment } from '../utils/Types';
import { baseRequest, Get } from './utils/Types';
import queryIndex from './indexes/queryIndex';
import typeIndex from './indexes/typeIndex';

export function getFactory(environment: PS2Environment, serviceId?: string) {
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

    return <T = never, C extends keyof typeIndex = keyof typeIndex>({collection, params}: baseRequest<C>, query: Get<queryIndex, C>): Promise<T extends never ? typeIndex[C][] : T> =>
        census.get(collection, {params: {...params, ...query}}).then(({data}) => data[`${collection}_list`]);
}

