import { censusRequest } from '../types/request';
import { baseCollections, sortType } from '../types/command';
import { sortToString } from '../utils/commandHelpers';

export function sort<C extends baseCollections, R extends censusRequest<C>>(req: R, fields: sortType[]): R {
    return {
        ...req,
        sort: fields,
        params: {
            ...req.params,
            'c:sort': sortToString(fields),
        },
    };
}
