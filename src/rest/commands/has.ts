import { censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export function has <C extends baseCollections>({collection, params}: censusRequest<C>, field: string): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:has': field,
        },
    };
}
