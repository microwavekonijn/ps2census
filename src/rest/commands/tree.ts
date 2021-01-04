import { treeToString } from '../utils/commandHelpers';
import { InferCollection, Query } from '../types/query';
import { Paths } from '../types/format';
import { Format } from '../types/collection';

export interface Tree<C> {
    field: Paths<Format<C>>;
    list?: 0 | 1;
    prefix?: string;
    start?: string;
}

type InferTree<Q> = Tree<InferCollection<Q>>;

export function tree<Q extends Query<any, any>>(query: Q, tree: InferTree<Q>): Q {
    return {
        ...query,
        // tree,
        params: {
            ...query.params,
            'c:tree': treeToString(tree),
        },
    };
}
