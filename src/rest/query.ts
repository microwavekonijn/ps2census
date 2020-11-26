import { CollectionsMap } from './types/collections';
import { Query } from './types/query';

export function query<N extends keyof CollectionsMap>(collection: N): Query<N, CollectionsMap[N]> {
    return {
        collection,
        params: {},
    };
}
