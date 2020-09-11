import { baseRequest, collections} from '../utils/requestTypes';
import { setParam } from '../utils/Helpers';
import { langs } from '../utils/responseTypes';

export default function <C extends collections>(request: baseRequest<C>, lang: langs): baseRequest<C> {
    return setParam(request, 'c:lang', lang);
}
