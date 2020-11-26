import { langs } from '../types/response';
import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function lang<Q extends Query<any, DefaultCollection>>(query: Q, lang: langs): Q {
    return {
        ...query,
        // lang,
        params: {
            ...query.params,
            'c:lang': lang,
        },
    };
}
