import { censusRequest, collections } from '../types/request';

export function retry <C extends collections>({collection, params}: censusRequest<C>, retry = false): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:retry': retry,
        },
    };
}
