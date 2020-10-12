import { censusRequest } from '../types/request';
import { limitCollections } from '../types/command';

export function limitPerDB<C extends limitCollections, R extends censusRequest<C>>(req: R, limit: number): R {
    return {
        ...req,
        limitPerDB: limit,
        params: {
            ...req.params,
            'c:limitPerDB': limit,
        },
    };
}
