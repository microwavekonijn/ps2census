import { censusDistinctRequest, censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export function distinct<C extends baseCollections>(req: censusRequest<C>, field: string): censusDistinctRequest<C> {
    return {
        ...req,
        distinct: field,
        params: {
            ...req.params,
            'c:distinct': field,
        },
    };
}
