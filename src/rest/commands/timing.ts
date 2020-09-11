import { baseRequest, collections } from '../utils/requestTypes';
import { setParam } from '../utils/Helpers';

export default function <C extends collections>(request: baseRequest<C>, timing = true): baseRequest<C> {
    return setParam(request, 'c:timing', timing);
}
