import axios from 'axios';
import CensusServerError from './exceptions/CensusServerError';
import CensusRestException from './exceptions/CensusRestException';
import { PS2Environment } from '../client/utils/Types';
import { commands, baseRequest } from './baseTypes';

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

    return <Q, T, C extends commands, R>({type, extract, params}: baseRequest<'get', Q, T, C, R>): Promise<T> =>
        census.get(type, {params}).then(extract);
}
