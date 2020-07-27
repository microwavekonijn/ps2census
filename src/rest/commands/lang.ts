import { baseRequest, langs } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export default function <C>(request: baseRequest<C>, lang: langs): baseRequest<C> {
    return setParam(request, 'c:lang', lang);
}
