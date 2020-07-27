import { baseRequest } from '../utils/Types';import { setParam } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, field: string): baseRequest<C> {
    return setParam(request, 'c:includeNull', field);
}
