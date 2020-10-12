import { censusRequest } from '../types/request';
import { langs } from '../types/response';
import { baseCollections } from '../types/command';

export function lang<C extends baseCollections, R extends censusRequest<C>>(req: R, lang: langs): R {
    return {
        ...req,
        lang,
        params: {
            ...req.params,
            'c:lang': lang,
        },
    };
}
