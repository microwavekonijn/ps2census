import { baseRequest } from '../utils/Types';
import { fieldsToString, setParam } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, fields: string[]): baseRequest<C> {
    return setParam(request, 'c:show', fieldsToString(fields));
}
