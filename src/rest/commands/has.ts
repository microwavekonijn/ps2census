import { censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export function has<C extends baseCollections, R extends censusRequest<C>>(req: R, field: string): R {
    return {
        ...req,
        has: field,
        params: {
            ...req.params,
            'c:has': field,
        },
    };
}
