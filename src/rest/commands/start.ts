import { censusRequest } from '../types/request';
import { startCollections } from '../types/command';

export function start<C extends startCollections, R extends censusRequest<C>>(req: R, start: number): R {
    return {
        ...req,
        start,
        params: {
            ...req.params,
            'c:start': start,
        },
    };
}
