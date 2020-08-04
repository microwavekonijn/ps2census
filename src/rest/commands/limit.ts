import { baseRequest } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, limit: number, perDB = false): baseRequest<C> {
    return setParam(request, perDB ? 'c:limitPerDB' : 'c:limit', limit);
}

export function hasLimitPerDB<C>(request: baseRequest<C>): boolean {
    return !!request.params.limitPerDB;
}

export function hasLimit<C>(request: baseRequest<C>): boolean {
    return !!request.params.limit;
}
