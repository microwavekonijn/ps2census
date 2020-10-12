import { censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export default function exactMatchFirst <C extends baseCollections>({collection, params}: censusRequest<C>, exactMatchFirst = true): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:exactMatchFirst': exactMatchFirst,
        },
    };
}
