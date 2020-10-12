import { censusRequest, collections } from '../types/request';
import { joinType } from '../types/command';
import { joinsToString } from '../utils/commandHelpers';

export function join<C extends collections, R extends censusRequest<C>>(req: R, joins: joinType[]): R {
    return {
        ...req,
        join: joins,
        params: {
            ...req.params,
            'c:join': joinsToString(joins),
        },
    };
}
