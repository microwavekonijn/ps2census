import { censusRequest, collections } from '../utils/requestTypes';

export default function <C extends collections>({collection, params}: censusRequest<C>, timing = true): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:timing': timing,
        },
    };
}
