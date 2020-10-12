import { censusRequest } from '../utils/requestTypes';
import { startCollections } from '../utils/commandTypes';

export function start<C extends startCollections>({collection, params}: censusRequest<C>, start: number): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:start': start,
        },
    };
}
