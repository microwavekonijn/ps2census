import { censusRequest, collections } from '../utils/requestTypes';

export function timing <C extends collections>({collection, params}: censusRequest<C>, timing = true): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:timing': timing,
        },
    };
}
