import { censusRequest } from '../types/request';
import { limitCollections } from '../types/command';

export function limitPerDB <C extends limitCollections>({collection, params}: censusRequest<C>, limit: number): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:limitPerDB': limit,
        },
    };
}
