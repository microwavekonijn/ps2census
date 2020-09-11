import { baseRequest, collections } from '../utils/requestTypes';
import { setParam } from '../utils/requestHelpers';
import { fieldsToString } from '../utils/commandHelpers';

export default function <C extends collections>(request: baseRequest<C>, fields: string[]): baseRequest<C> {
    return setParam(request, 'c:hide', fieldsToString(fields));
}
