import { baseRequest } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export type collections = 'character';

export default function <C extends collections>(request: baseRequest<C>, sensitive = false): baseRequest<C> {
    return setParam(request, 'c:case', sensitive);
}
