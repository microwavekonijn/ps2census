import { censusRequest, collections } from '../types/request';
import { treeType } from '../types/command';
import { treeToString } from '../utils/commandHelpers';

export function tree<C extends collections>({collection, params}: censusRequest<C>, tree: treeType): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:tree': treeToString(tree),
        },
    };
}
