import { baseRequest, collections } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export default function <C extends collections>(request: baseRequest<C>, sensitive = false): baseRequest<C> {
    return setParam(request, 'c:case', sensitive);
}
