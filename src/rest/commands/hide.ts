import { censusRequest } from '../types/request';
import { fieldsToString } from '../utils/commandHelpers';
import { baseCollections } from '../types/command';

export function hide <C extends baseCollections>({collection, params}: censusRequest<C>, fields: string[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:hide': fieldsToString(fields),
        },
    };
}
