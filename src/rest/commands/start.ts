import { censusRequest } from '../utils/requestTypes';
import { startCollections } from '../utils/commandTypes';

export default function <C extends startCollections>({collection, params}: censusRequest<C>, start: number): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:start': start,
        },
    };
}
