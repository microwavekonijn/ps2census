import { censusRequest } from '../types/request';
import { langs } from '../types/response';
import { baseCollections } from '../types/command';

export function lang <C extends baseCollections>({collection, params}: censusRequest<C>, lang: langs): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:lang': lang,
        },
    };
}
