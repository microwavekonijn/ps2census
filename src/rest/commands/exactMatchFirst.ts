import { baseRequest, collections } from '../utils/requestTypes';
import { setParam } from '../utils/Helpers';

export default function <C extends collections>(request: baseRequest<C>, exactMatchFirst = true): baseRequest<C> {
    return setParam(request, 'c:exactMatchFirst', exactMatchFirst);
}
