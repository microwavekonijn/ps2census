import { censusRequest } from '../utils/requestTypes';
import { fieldsToString } from '../utils/commandHelpers';
import { baseCollections } from '../utils/commandTypes';

export default function <C extends baseCollections>({collection, params}: censusRequest<C>, fields: string[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:show': fieldsToString(fields),
        },
    };
}
