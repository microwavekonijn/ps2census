import { censusRequest, collections } from '../utils/requestTypes';

export function retry <C extends collections>({collection, params}: censusRequest<C>, retry = false): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:retry': retry,
        },
    };
}
