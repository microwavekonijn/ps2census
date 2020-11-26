import { Join } from '../types/command';
import { joinsToString } from '../utils/commandHelpers';
import { Query } from '../types/query';

export function join<Q extends Query<any, unknown>>(query: Q, joins: Join[]): Q {
    return {
        ...query,
        // join: joins,
        params: {
            ...query.params,
            'c:join': joinsToString(joins),
        },
    };
}
