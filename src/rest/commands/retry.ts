import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function retry<Q extends Query<any, DefaultCollection>>(query: Q, retry = false): Q {
    return {
        ...query,
        // retry,
        params: {
            ...query.params,
            'c:retry': retry,
        },
    };
}
