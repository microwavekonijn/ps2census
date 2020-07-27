import { baseRequest } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, limit: number, perDB = false): baseRequest<C> {
    return setParam(request, perDB ? 'c:limitPerDB' : 'c:limit', limit);
}
