import { baseRequest, collections } from '../utils/requestTypes';
import { setParam } from '../utils/requestHelpers';

export default function <C extends collections>(request: baseRequest<C>, field: string): baseRequest<C> {
    return setParam(request, 'c:show', field);
}
