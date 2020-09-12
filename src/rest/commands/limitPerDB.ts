import { censusRequest, collections } from '../utils/requestTypes';

export default function <C extends collections>({collection, params}: censusRequest<C>, limit: number): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:limitPerDB': limit,
        },
    };
}
