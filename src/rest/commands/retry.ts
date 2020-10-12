import { censusRequest, collections } from '../types/request';

export function retry<C extends collections, R extends censusRequest<C>>(req: R, retry = false): R {
    return {
        ...req,
        retry,
        params: {
            ...req.params,
            'c:retry': retry,
        },
    };
}
