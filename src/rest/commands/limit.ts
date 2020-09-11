import { baseRequest, collections } from '../utils/requestTypes';
import { setParam } from '../utils/Helpers';

export default function <C extends collections>(request: baseRequest<C>, limit: number, perDB = false): baseRequest<C> {
    return setParam(request, perDB ? 'c:limitPerDB' : 'c:limit', limit);
}
