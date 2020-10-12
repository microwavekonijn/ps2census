import { censusRequest } from '../utils/requestTypes';
import { langs } from '../utils/responseTypes';
import { baseCollections } from '../utils/commandTypes';

export function lang <C extends baseCollections>({collection, params}: censusRequest<C>, lang: langs): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:lang': lang,
        },
    };
}
