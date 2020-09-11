import { baseRequest, collections } from '../utils/requestTypes';
import { setParam } from '../utils/requestHelpers';

export default function <C extends collections>(request: baseRequest<C>, start: number): baseRequest<C> {
    return setParam(request, 'c:start', start);
}
