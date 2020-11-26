import { fieldsToString } from '../utils/commandHelpers';
import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function show<Q extends Query<any, DefaultCollection>>(query: Q, fields: string[]): Q {
    return {
        ...query,
        show: fields,
        params: {
            ...query.params,
            'c:show': fieldsToString(fields),
        },
    };
}
