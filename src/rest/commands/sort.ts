import { sortType } from '../types/command';
import { sortToString } from '../utils/commandHelpers';
import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function sort<Q extends Query<any, DefaultCollection>>(query: Q, fields: sortType[]): Q {
    return {
        ...query,
        sort: fields,
        params: {
            ...query.params,
            'c:sort': sortToString(fields),
        },
    };
}
