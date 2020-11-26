import { fieldsToString } from '../utils/commandHelpers';
import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function hide<Q extends Query<any, DefaultCollection>>(query: Q, fields: string[]): Q {
    return {
        ...query,
        // hide: fields,
        params: {
            ...query.params,
            'c:hide': fieldsToString(fields),
        },
    };
}
