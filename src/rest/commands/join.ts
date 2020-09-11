import { baseRequest, collections} from '../utils/requestTypes';
import { setParam } from '../utils/requestHelpers';
import { joinType } from '../utils/commandTypes';
import { joinsToString } from '../utils/commandHelpers';

export default function <C extends collections>(request: baseRequest<C>, joins: joinType[]): baseRequest<C> {
    return setParam(request, 'c:join', joinsToString(joins));
}
