import { censusRequest } from '../utils/requestTypes';
import { fieldsToString } from '../utils/commandHelpers';
import { baseCollections } from '../utils/commandTypes';

export function hide <C extends baseCollections>({collection, params}: censusRequest<C>, fields: string[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:hide': fieldsToString(fields),
        },
    };
}
