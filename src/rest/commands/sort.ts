import { baseRequest, collections } from '../utils/requestTypes';
import { setParam, sortToString } from '../utils/Helpers';
import { sortType } from '../utils/commandTypes';

export default function <C extends collections>(request: baseRequest<C>, fields: sortType[]): baseRequest<C> {
    return setParam(request, 'c:sort', sortToString(fields));
}
