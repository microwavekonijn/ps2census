import { censusRequest, censusTreeRequest, collections } from '../types/request';
import { treeType } from '../types/command';
import { treeToString } from '../utils/commandHelpers';

export function tree<C extends collections>(req: censusRequest<C>, tree: treeType): censusTreeRequest<C> {
    return {
        ...req,
        tree,
        params: {
            ...req.params,
            'c:tree': treeToString(tree),
        },
    };
}
