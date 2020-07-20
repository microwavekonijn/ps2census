import { baseOperations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

export type resolveType<R> = R | [R, string[]];

export default function <T, Q, O extends baseOperations, R>(request: baseRequest<Q, T, O, R>, resolve: resolveType<R>[]): ApplyOperation<'resolve', Q, T, O, R> {
    // @ts-ignore
    return setParam(
        request,
        'c:resolve',
        resolve.map(r => Array.isArray(r) ? `${r[0]}(${r[1].join(',')})` : r).join(','),
    );
}
