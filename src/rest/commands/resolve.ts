import { baseRequest, collections } from '../utils/requestTypes';
import { setParam } from '../utils/requestHelpers';
import resolveIndex from '../indexes/resolveIndex';
import { Get } from '../../utils/Types';
import { resolveToString } from '../utils/commandHelpers';

type resolveType<C> = Get<resolveIndex, C> | [Get<resolveIndex, C>, string[]];

export default function <C extends collections>(request: baseRequest<C>, resolve: resolveType<C>[]): baseRequest<C> {
    return setParam(request, 'c:resolve', resolveToString(resolve));
}
