import { baseRequest, collections } from '../utils/requestTypes';
import { fieldsToString, setParam } from '../utils/Helpers';

export default function <C extends collections>(request: baseRequest<C>, fields: string[]): baseRequest<C> {
    return setParam(request, 'c:show', fieldsToString(fields));
}
