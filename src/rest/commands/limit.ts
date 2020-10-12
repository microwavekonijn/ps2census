import { censusRequest } from '../types/request';
import { limitCollections } from '../types/command';

export function limit<C extends limitCollections, R extends censusRequest<C>>(req: R, limit: number): R {
    return {
        ...req,
        limit,
        params: {
            ...req.params,
            'c:limit': limit,
        },
    };
}
