import { baseRequest, joinType } from '../utils/Types';
import { joinsToString, setParam } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, joins: joinType[]): baseRequest<C> {
    return setParam(request, 'c:join', joinsToString(joins));
}
