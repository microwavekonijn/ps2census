import { ApplyOperation, baseRequest, commands, operations } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, limit: number, perDB = false): ApplyOperation<'limit', O, Q, T, C, R> {
    // @ts-ignore
    return setParam(request, perDB ? 'c:limitPerDB' : 'c:limit', limit);
}
