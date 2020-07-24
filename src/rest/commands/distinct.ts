import { ApplyOperation, baseRequest, commands, operations } from '../utils/Types';
import { setParam } from '../utils/Helpers';

// TODO: Fix return type, also distinct with tree possible?
export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, field: string): ApplyOperation<'distinct', O, Q, any, C, R> {
    // @ts-ignore
    return setParam(request, 'c:show', field);
}
