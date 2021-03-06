import { Query } from '../types/query';

export function timing<Q extends Query<any, any>>(query: Q, timing = true): Q {
    return {
        ...query,
        // timing,
        params: {
            ...query.params,
            'c:timing': timing,
        },
    };
}
