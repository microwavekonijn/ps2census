import { InferPaths, Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function distinct<Q extends Query<any, DefaultCollection>>(query: Q, field: InferPaths<Q>): Q {
    return {
        ...query,
        // distinct: field,
        params: {
            ...query.params,
            'c:distinct': field,
        },
    };
}
