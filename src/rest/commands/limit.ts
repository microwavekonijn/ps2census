import { Query } from '../types/query';
import { Limitable } from '../types/collection';

export function limit<Q extends Query<any, Limitable>>(query: Q, limit: number): Q {
    return {
        ...query,
        // limit,
        params: {
            ...query.params,
            'c:limit': limit,
        },
    };
}
