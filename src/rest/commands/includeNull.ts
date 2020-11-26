import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function includeNull<Q extends Query<any, DefaultCollection>>(query: Q, field: string): Q {
    return {
        ...query,
        // includeNull: field,
        params: {
            ...query.params,
            'c:includeNull': field,
        },
    };
}
