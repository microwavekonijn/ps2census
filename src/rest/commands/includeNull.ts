import { censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export function includeNull <C extends baseCollections>({collection, params}: censusRequest<C>, field: string): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:includeNull': field,
        },
    };
}
