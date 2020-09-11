import { baseRequest, collections } from '../utils/requestTypes';
import { setParam} from '../utils/requestHelpers';
import { sortType } from '../utils/commandTypes';
import { sortToString } from '../utils/commandHelpers';

export default function <C extends collections>(request: baseRequest<C>, fields: sortType[]): baseRequest<C> {
    return setParam(request, 'c:sort', sortToString(fields));
}
