import { censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export function caseSensitive <C extends baseCollections>({collection, params}: censusRequest<C>, sensitive = false): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:case': sensitive,
        },
    };
}
