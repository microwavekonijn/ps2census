import { commands, operations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, field: string): ApplyOperation<'has', O, Q, T, C, R> {
    // @ts-ignore
    return setParam(request, 'c:has', field);
}
