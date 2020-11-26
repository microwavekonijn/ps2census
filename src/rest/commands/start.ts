import { Query } from '../types/query';
import { Startable } from '../types/collection';

export function start<Q extends Query<any, Startable>>(query: Q, start: number): Q {
    return {
        ...query,
        start,
        params: {
            ...query.params,
            'c:start': start,
        },
    };
}
