import { censusRequest, collections } from '../types/request';

export function timing <C extends collections>({collection, params}: censusRequest<C>, timing = true): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:timing': timing,
        },
    };
}
