import { censusRequest } from '../types/request';
import { resolveIndex } from '../indexes/resolveIndex';
import { resolveToString } from '../utils/commandHelpers';
import { resolveCollections } from '../types/command';

type resolveType<C extends keyof resolveIndex> = resolveIndex[C] | [resolveIndex[C], string[]];

export function resolve<C extends resolveCollections, R extends censusRequest<C>>(req: R, resolve: resolveType<C>[]): R {
    return {
        ...req,
        resolve,
        params: {
            ...req.params,
            'c:resolve': resolveToString(resolve),
        },
    };
}
