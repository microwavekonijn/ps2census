import { censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export function includeNull<C extends baseCollections, R extends censusRequest<C>>(req: R, field: string): R {
    return {
        ...req,
        includeNull: field,
        params: {
            ...req.params,
            'c:includeNull': field,
        },
    };
}
