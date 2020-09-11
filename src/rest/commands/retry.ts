import { baseRequest, collections } from '../utils/requestTypes';
import { setParam } from '../utils/requestHelpers';

export default function <C extends collections>(request: baseRequest<C>, retry = false): baseRequest<C> {
    return setParam(request, 'c:retry', retry);
}
