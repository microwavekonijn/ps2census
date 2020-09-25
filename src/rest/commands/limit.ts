import { censusRequest } from '../utils/requestTypes';
import { limitCollections } from '../utils/commandTypes';

export default function <C extends limitCollections>({collection, params}: censusRequest<C>, limit: number): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:limit': limit,
        },
    };
}
