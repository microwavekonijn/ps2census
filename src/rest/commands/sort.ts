import { baseRequest } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export type sortType = string | [string, 1 | -1];

export function sortToString(fields: sortType[]): string {
    return fields.map(f => Array.isArray(f) ? f.join(':') : f).join(',');
}

export default function <C>(request: baseRequest<C>, fields: sortType[]): baseRequest<C> {
    return setParam(request, 'c:sort', sortToString(fields));
}
