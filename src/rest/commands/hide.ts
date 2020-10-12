import { censusRequest } from '../types/request';
import { fieldsToString } from '../utils/commandHelpers';
import { baseCollections } from '../types/command';

export function hide<C extends baseCollections, R extends censusRequest<C>>(req: R, fields: string[]): R {
    return {
        ...req,
        hide: fields,
        params: {
            ...req.params,
            'c:hide': fieldsToString(fields),
        },
    };
}
