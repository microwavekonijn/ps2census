import { censusRequest } from '../utils/requestTypes';
import { baseCollections } from '../utils/commandTypes';

export function caseSensitive <C extends baseCollections>({collection, params}: censusRequest<C>, sensitive = false): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:case': sensitive,
        },
    };
}
