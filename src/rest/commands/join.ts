import { joinsToString } from '../utils/commandHelpers';
import { InferCollection, Query } from '../types/query';
import { Format } from '../types/collection';
import { Collections, CollectionsMap } from '../types/collections';
import { PartialPaths, Paths } from '../types/format';

export type JoinOptions<C> = {
    [K in keyof CollectionsMap]: {
        type: K;
        on?: Paths<Format<C>>;
        to?: Paths<Format<CollectionsMap[K]['format']>>;
        list?: boolean;
        inject_at?: string;
        terms?: Record<string, string>;
        outer?: boolean;
        show?: PartialPaths<Format<CollectionsMap[K]['format']>>[];
        hide?: PartialPaths<Format<CollectionsMap[K]['format']>>[];
        nested?: Join<CollectionsMap[K]>[];
    }
}[Collections['collection']];

export type Join<C> = keyof CollectionsMap | JoinOptions<C>;

type InferJoin<Q> = Join<InferCollection<Q>>;

export function join<Q extends Query<any, any>>(query: Q, ...joins: InferJoin<Q>[]): Q {
    return {
        ...query,
        // join: joins,
        params: {
            ...query.params,
            'c:join': joinsToString(joins),
        },
    };
}
