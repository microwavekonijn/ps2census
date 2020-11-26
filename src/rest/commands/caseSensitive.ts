import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function caseSensitive<Q extends Query<any, DefaultCollection>>(query: Q, caseSensitive = false): Q {
    return {
        ...query,
        // caseSensitive,
        params: {
            ...query.params,
            'c:case': caseSensitive,
        },
    };
}
