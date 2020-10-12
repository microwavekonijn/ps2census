import axios from 'axios';
import { CensusServerError } from './exceptions/CensusServerError';
import { CensusRestException } from './exceptions/CensusRestException';
import { PS2Environment } from '../utils/Types';
import { getMethod } from './utils/requestTypes';

export function getFactory(environment: PS2Environment, serviceId?: string): getMethod {
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

    return ({collection, params}, query) =>
        census.get(
            collection,
            {params: {...params, ...query}},
        ).then(({data}) => data[`${collection}_list`]);
}

