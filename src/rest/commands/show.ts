import { censusRequest } from '../types/request';
import { fieldsToString } from '../utils/commandHelpers';
import { baseCollections } from '../types/command';

export function show<C extends baseCollections, R extends censusRequest<C>>(req: R, fields: string[]): R {
    return {
        ...req,
        show: fields,
        params: {
            ...req.params,
            'c:show': fieldsToString(fields),
        },
    };
}
