import axios from 'axios';
import CensusServerError from './exceptions/CensusServerError';
import CensusRestException from './exceptions/CensusRestException';
import { Get, PS2Environment } from '../utils/Types';
import { baseRequest} from './utils/Types';
import queryIndex from './indexes/queryIndex';
import typeIndex from './indexes/typeIndex';

type countableCollections = Exclude<keyof typeIndex,
    'charactersEvent'
    | 'charactersEventGrouped'
    | 'charactersFriend'
    | 'charactersItem'
    | 'charactersLeaderboard'
    | 'charactersOnlineStatus'
    | 'charactersWorld'
    | 'event'
    | 'leaderboard'
    | 'map'
    | 'worldEvent'>;

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

    return <C extends countableCollections>({collection, params}: baseRequest<C>, query: Get<queryIndex, C>): Promise<number> =>
        census.get(collection, {params: {...params, ...query}}).then(({data}: any) => data);
}
