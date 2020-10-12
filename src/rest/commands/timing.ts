import { censusRequest, collections } from '../types/request';

export function timing<C extends collections, R extends censusRequest<C>>(req: R, timing = true): R {
    return {
        ...req,
        timing,
        params: {
            ...req.params,
            'c:timing': timing,
        },
    };
}
