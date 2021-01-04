import { fieldsToString } from '../utils/commandHelpers';
import { InferPartialPaths, Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function show<Q extends Query<any, DefaultCollection>>(query: Q, fields: InferPartialPaths<Q>[]): Q {
    return {
        ...query,
        // show: fields,
        params: {
            ...query.params,
            'c:show': fieldsToString(fields),
        },
    };
}
