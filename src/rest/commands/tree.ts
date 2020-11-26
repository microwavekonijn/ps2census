import { treeType } from '../types/command';
import { treeToString } from '../utils/commandHelpers';
import { Query } from '../types/query';

export function tree<Q extends Query<any, unknown>>(query: Q, tree: treeType): Q {
    return {
        ...query,
        tree,
        params: {
            ...query.params,
            'c:tree': treeToString(tree),
        },
    };
}
