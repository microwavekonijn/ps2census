import { censusRequest, collections } from '../utils/requestTypes';
import { treeType } from '../utils/commandTypes';
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
