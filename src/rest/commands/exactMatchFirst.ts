import { censusRequest } from '../types/request';
import { baseCollections } from '../types/command';

export default function exactMatchFirst<C extends baseCollections, R extends censusRequest<C>>(req: R, exactMatchFirst = true): R {
    return {
        ...req,
        exactMatchFirst,
        params: {
            ...req.params,
            'c:exactMatchFirst': exactMatchFirst,
        },
    };
}
