import { censusRequest } from '../utils/requestTypes';
import { baseCollections } from '../utils/commandTypes';

export default function <C extends baseCollections>({collection, params}: censusRequest<C>, sensitive = false): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:case': sensitive,
        },
    };
}
