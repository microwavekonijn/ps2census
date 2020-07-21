import { commands, baseRequest, operations } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, retry = false): ApplyOperation<'retry', O, Q, T, C, R> {
    // @ts-ignore
    return setParam(request, 'c:retry', retry);
}
