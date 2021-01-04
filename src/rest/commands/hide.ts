import { fieldsToString } from '../utils/commandHelpers';
import { InferPartialPaths, Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function hide<Q extends Query<any, DefaultCollection>>(query: Q, fields: InferPartialPaths<Q>[]): Q {
    return {
        ...query,
        // hide: fields,
        params: {
            ...query.params,
            'c:hide': fieldsToString(fields),
        },
    };
}
