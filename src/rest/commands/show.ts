import { censusRequest } from '../types/request';
import { fieldsToString } from '../utils/commandHelpers';
import { baseCollections } from '../types/command';

export function show<C extends baseCollections>({collection, params}: censusRequest<C>, fields: string[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:show': fieldsToString(fields),
        },
    };
}
