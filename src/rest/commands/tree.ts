import { baseRequest, collections} from '../utils/requestTypes';
import { setParam, treeToString } from '../utils/Helpers';
import { treeType } from '../utils/commandTypes';

export default function <C extends collections>(request: baseRequest<C>, tree: treeType): baseRequest<C> {
    return setParam(request, 'c:tree', treeToString(tree));
}
