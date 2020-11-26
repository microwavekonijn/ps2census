import { Query } from '../types/query';
import { Limitable } from '../types/collection';

// TODO: Check if it is limited to character collection only
export function limitPerDB<Q extends Query<any, Limitable>>(query: Q, limit: number): Q {
    return {
        ...query,
        // limitPerDB: limit,
        params: {
            ...query.params,
            'c:limitPerDB': limit,
        },
    };
}
