import { baseRequest} from '../utils/Types';
import { resolveToString, setParam } from '../utils/Helpers';
import resolveIndex from '../indexes/resolveIndex';
import { Get } from '../../utils/Types';

type resolveType<C> = Get<resolveIndex, C> | [Get<resolveIndex, C>, string[]];

export default function <C>(request: baseRequest<C>, resolve: resolveType<C>[]): baseRequest<C> {
    return setParam(request, 'c:resolve', resolveToString(resolve));
}
