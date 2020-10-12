import { censusRequest } from '../types/request';
import { startCollections } from '../types/command';

export function start<C extends startCollections>({collection, params}: censusRequest<C>, start: number): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:start': start,
        },
    };
}
