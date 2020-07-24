import { ApplyOperation, baseRequest, commands, operations } from '../utils/Types';
import { setExtract, setParam } from '../utils/Helpers';

export type timingType = {
    'item-ms': number,
    'total-ms': number
}

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, timing = true): ApplyOperation<'timing' | 'distinct' | 'join' | 'tree', O, Q, [T, timingType], C, R> {
    // @ts-ignore
    return setExtract(
        setParam(request, 'c:timing', timing),
        ({data}) => [data[`${request.type}_list`], data.timing],
    );
}
