import { baseRequest } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, retry = false): baseRequest<C> {
    return setParam(request, 'c:retry', retry);
}
