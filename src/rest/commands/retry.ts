import { censusRequest, collections } from '../utils/requestTypes';

export default function <C extends collections>({collection, params}: censusRequest<C>, retry = false): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:retry': retry,
        },
    };
}
