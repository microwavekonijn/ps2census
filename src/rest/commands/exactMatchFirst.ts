import { censusRequest, collections } from '../utils/requestTypes';
export default function <C extends collections>({collection, params}: censusRequest<C>, exactMatchFirst = true): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:exactMatchFirst': exactMatchFirst,
        },
    };
}
