import { commands, operations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

export type sortType = string | [string, 1 | -1];

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, fields: sortType[]): ApplyOperation<'sort', O, Q, T, C, R> {
    // @ts-ignore
    return setParam(
        request,
        'c:sort',
        fields.map(f => Array.isArray(f) ? f.join(':') : f).join(','),
    );
}
