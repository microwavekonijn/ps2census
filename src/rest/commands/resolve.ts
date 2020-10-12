import { censusRequest } from '../utils/requestTypes';
import resolveIndex from '../indexes/resolveIndex';
import { resolveToString } from '../utils/commandHelpers';

type resolveType<C extends keyof resolveIndex> = resolveIndex[C] | [resolveIndex[C], string[]];

export function resolve <C extends keyof resolveIndex>({collection, params}: censusRequest<C>, resolve: resolveType<C>[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:resolve': resolveToString(resolve),
        },
    };
}
