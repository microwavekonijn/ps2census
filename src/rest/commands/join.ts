import { joinType } from '../types/command';
import { joinsToString } from '../utils/commandHelpers';
import { Query } from '../types/query';

export function join<Q extends Query<any, unknown>>(query: Q, joins: joinType[]): Q {
    return {
        ...query,
        // join: joins,
        params: {
            ...query.params,
            'c:join': joinsToString(joins),
        },
    };
}
