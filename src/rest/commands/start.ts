import { baseRequest } from '../utils/Types';import { setParam } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, start: number): baseRequest<C> {
    return setParam(request, 'c:start', start);
}
