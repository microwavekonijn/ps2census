import { baseRequest, treeType } from '../utils/Types';
import { setParam, treeToString } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, tree: treeType): baseRequest<C> {
    return setParam(request, 'c:tree', treeToString(tree));
}
