import { censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export function caseSensitive<C extends baseCollections, R extends censusRequest<C>>(req: R, caseSensitive = false): R {
    return {
        ...req,
        caseSensitive,
        params: {
            ...req.params,
            'c:case': caseSensitive,
        },
    };
}
