import { censusRequest, collections } from '../utils/requestTypes';
import { sortType } from '../utils/commandTypes';
import { sortToString } from '../utils/commandHelpers';

export default function <C extends collections>({collection, params}: censusRequest<C>, fields: sortType[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:sort': sortToString(fields),
        },
    };
}
