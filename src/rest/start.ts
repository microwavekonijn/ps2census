import { baseOperations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

export default function <T, Q, O extends baseOperations, R>(request: baseRequest<Q, T, O, R>, start: number): ApplyOperation<'start', Q, T, O, R> {
    // @ts-ignore
    return setParam(request, 'c:start', start);
}
