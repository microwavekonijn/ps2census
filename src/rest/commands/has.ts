import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function has<Q extends Query<any, DefaultCollection>>(query: Q, field: string): Q {
    return {
        ...query,
        // has: field,
        params: {
            ...query.params,
            'c:has': field,
        },
    };
}
