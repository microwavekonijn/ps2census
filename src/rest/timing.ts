import { baseOperations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setExtract, setParam } from './utils/Helpers';

export type timingType = {
    'item-ms': number,
    'total-ms': number
}

// Should be applied last!!!
export default function <T, Q, O extends baseOperations, R>(request: baseRequest<Q, T, O, R>, timing = true): ApplyOperation<'timing', Q, [T, timingType], O, R> {
    // @ts-ignore
    return setExtract(
        setParam(request, 'c:timing', timing),
        (data) => [data[`${request.type}_list`], data.timing],
    );
}
