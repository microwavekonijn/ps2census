import { baseRequest, sortType } from '../utils/Types';
import { setParam, sortToString } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, fields: sortType[]): baseRequest<C> {
    return setParam(request, 'c:sort', sortToString(fields));
}
