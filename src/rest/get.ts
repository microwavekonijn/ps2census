import axios from 'axios';
import CensusServerError from './exceptions/CensusServerError';
import CensusRestException from './exceptions/CensusRestException';
import { Get, PS2Environment } from '../utils/Types';
import { baseRequest} from './utils/Types';
import queryIndex from './indexes/queryIndex';
import typeIndex from './indexes/typeIndex';

export type getMethod<C extends keyof typeIndex = keyof typeIndex> = (request: baseRequest<C>, query: Get<queryIndex, C>) => Promise<typeIndex[C][]>;

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

    return <T = never, C extends keyof typeIndex = keyof typeIndex>({collection, params}: baseRequest<C>, query: Get<queryIndex, C>): Promise<T extends never ? typeIndex[C][] : T> =>
        census.get(collection, {params: {...params, ...query}}).then(({data}) => data[`${collection}_list`]);
}

