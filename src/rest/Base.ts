import axios from 'axios';
import { PS2EnvironmentAPI, requestOpts } from './utils/Types';
import CensusServerError from './exceptions/CensusServerError';
import CensusRestException from './exceptions/CensusRestException';
import { generateRequest } from './utils/Helpers';

export const axiosInstance = axios.create();

export const defineCensusType = <Q, T>(
    type: string,
    transformQuery?: (query: Q) => Record<string, any>,
    transformResponse?: (data: any) => T,
) =>
    <U = T>(query: Q, opts: requestOpts | PS2EnvironmentAPI): Promise<U> => {
        if (typeof opts === 'string')
            opts = {environment: opts};

        // Why can't you just be normal?!?
        const baseUrl = opts.serviceId
            ? `https://census.daybreakgames.com/s:${opts.serviceId}/get/${opts.environment}:v2`
            : `https://census.daybreakgames.com/get/${opts.environment}:v2`;

        return axiosInstance.get(`${baseUrl}/${type}`, {
            params: generateRequest(transformQuery ? transformQuery(query) : query, opts),
        }).then(({data}) => {
            if (data.errorMessage || data.errorCode)
                throw new CensusServerError(data);

            if (data.error)
                throw new CensusRestException(data.error);

            return transformResponse ? transformResponse(data[`${type}_list`]) : data[`${type}_list`];
        });
    };

