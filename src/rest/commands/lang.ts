import { censusRequest } from '../utils/requestTypes';
import { langs } from '../utils/responseTypes';
import { baseCollections } from '../utils/commandTypes';

export default function <C extends baseCollections>({collection, params}: censusRequest<C>, lang: langs): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:lang': lang,
        },
    };
}
