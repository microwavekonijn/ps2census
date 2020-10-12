import { censusRequest } from '../types/request';
import { baseCollections, sortType } from '../types/command';
import { sortToString } from '../utils/commandHelpers';

export function sort<C extends baseCollections>({collection, params}: censusRequest<C>, fields: sortType[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:sort': sortToString(fields),
        },
    };
}
