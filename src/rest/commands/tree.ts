import { baseRequest, collections} from '../utils/requestTypes';
import { setParam} from '../utils/requestHelpers';
import { treeType } from '../utils/commandTypes';
import { treeToString } from '../utils/commandHelpers';

export default function <C extends collections>(request: baseRequest<C>, tree: treeType): baseRequest<C> {
    return setParam(request, 'c:tree', treeToString(tree));
}
