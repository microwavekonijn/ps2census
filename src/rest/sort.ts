import { baseOperations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

export type sortType = string | [string, 1 | -1];

export default function <T, Q, O extends baseOperations, R>(request: baseRequest<Q, T, O, R>, fields: sortType[]): ApplyOperation<'sort', Q, T, O, R> {
    // @ts-ignore
    return setParam(
        request,
        'c:sort',
        fields.map(f => Array.isArray(f) ? f.join(':') : f).join(','),
    );
}
