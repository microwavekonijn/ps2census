import { sortToString } from '../utils/commandHelpers';
import { InferCollection, Query } from '../types/query';
import { DefaultCollection, Format } from '../types/collection';
import { Paths } from '../types/format';

export type Sort<C> = Paths<Format<C>> | [Paths<Format<C>>, 1 | -1];

type InferSort<Q> = Sort<InferCollection<Q>>;

export function sort<Q extends Query<any, DefaultCollection>>(query: Q, fields: InferSort<Q>[]): Q {
    return {
        ...query,
        // sort: fields,
        params: {
            ...query.params,
            'c:sort': sortToString(fields),
        },
    };
}
