import { baseRequest, collections} from '../utils/requestTypes';
import { joinsToString, setParam } from '../utils/Helpers';
import { joinType } from '../utils/commandTypes';

export default function <C extends collections>(request: baseRequest<C>, joins: joinType[]): baseRequest<C> {
    return setParam(request, 'c:join', joinsToString(joins));
}
