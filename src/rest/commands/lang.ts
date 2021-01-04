import { Langs } from '../types/response';
import { Query } from '../types/query';
import { DefaultCollection } from '../types/collection';

export function lang<Q extends Query<any, DefaultCollection>>(query: Q, lang: Langs): Q {
    return {
        ...query,
        // lang,
        params: {
            ...query.params,
            'c:lang': lang,
        },
    };
}
