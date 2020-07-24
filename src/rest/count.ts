import axios from 'axios';
import CensusServerError from './exceptions/CensusServerError';
import CensusRestException from './exceptions/CensusRestException';
import { PS2Environment } from '../utils/Types';
import { baseRequest, commands } from './utils/Types';

export function countFactory(environment: PS2Environment, serviceId?: string) {
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

    return <Q, T, C extends commands, R>({type, extract, params}: baseRequest<'count', Q, T, C, R>, query: Q): Promise<T> =>
        census.get(type, {params: {...params, ...query}}).then(({data}: any) => data);
}
