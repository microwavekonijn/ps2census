import { censusRequest, collections } from '../utils/requestTypes';

export default function <C extends collections>({collection, params}: censusRequest<C>, field: string): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:show': field,
        },
    };
}
