import { ApplyOperation, baseRequest, commands, operations } from './utils/Types';
import { setParam } from './utils/Helpers';

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, fields: string[]): ApplyOperation<'show' | 'hide', O, Q, T, C, R> {
    // @ts-ignore
    return setParam(request, 'c:show', fields.join(','));
}
