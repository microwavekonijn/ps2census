import { censusRequest } from '../utils/requestTypes';
import { baseCollections, sortType } from '../utils/commandTypes';
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
