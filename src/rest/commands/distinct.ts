import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function distinct<Q extends Query<any, DefaultCollection>>(query: Q, field: string): Q {
    return {
        ...query,
        // distinct: field,
        params: {
            ...query.params,
            'c:distinct': field,
        },
    };
}
