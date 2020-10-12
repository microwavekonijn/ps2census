import { censusRequest } from '../utils/requestTypes';
import { baseCollections } from '../utils/commandTypes';

export function includeNull <C extends baseCollections>({collection, params}: censusRequest<C>, field: string): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:includeNull': field,
        },
    };
}
