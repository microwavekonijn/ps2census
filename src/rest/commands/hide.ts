import { censusRequest, collections } from '../utils/requestTypes';
import { fieldsToString } from '../utils/commandHelpers';

export default function <C extends collections>({collection, params}: censusRequest<C>, fields: string[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:hide': fieldsToString(fields),
        },
    };
}
