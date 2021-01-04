import { resolveToString } from '../utils/commandHelpers';
import { InferCollection, Query } from '../types/query';
import { Resolvable, Resolve } from '../types/collection';

type Resolvables<Q, R extends Resolve<InferCollection<Q>> = Resolve<InferCollection<Q>>> = R | [R, string[]];

export function resolve<Q extends Query<any, Resolvable<any>>>(query: Q, resolve: Resolvables<Q>[]): Q {
    return {
        ...query,
        // resolve,
        params: {
            ...query.params,
            'c:resolve': resolveToString(resolve),
        },
    };
}
