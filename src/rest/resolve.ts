import { commands, operations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

export type resolveType<R> = R | [R, string[]];

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, resolve: resolveType<R>[]): ApplyOperation<'resolve', O, Q, T, C, R> {
    // @ts-ignore
    return setParam(
        request,
        'c:resolve',
        resolve.map(r => Array.isArray(r) ? `${r[0]}(${r[1].join(',')})` : r).join(','),
    );
}
