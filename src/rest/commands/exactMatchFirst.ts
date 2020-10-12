import { censusRequest } from '../utils/requestTypes';
import { baseCollections } from '../utils/commandTypes';

export default function exactMatchFirst <C extends baseCollections>({collection, params}: censusRequest<C>, exactMatchFirst = true): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:exactMatchFirst': exactMatchFirst,
        },
    };
}
