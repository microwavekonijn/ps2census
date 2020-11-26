import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export default function exactMatchFirst<Q extends Query<any, DefaultCollection>>(query: Q, exactMatchFirst = true): Q {
    return {
        ...query,
        // exactMatchFirst,
        params: {
            ...query.params,
            'c:exactMatchFirst': exactMatchFirst,
        },
    };
}
