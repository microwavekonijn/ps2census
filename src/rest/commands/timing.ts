import { baseRequest } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export type timingType = {
    'item-ms': number,
    'total-ms': number
}

export default function <C>(request: baseRequest<C>, timing = true): baseRequest<C> {
    return setParam(request, 'c:timing', timing);
}
