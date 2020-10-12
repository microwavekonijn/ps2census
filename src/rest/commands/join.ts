import { censusRequest, collections } from '../utils/requestTypes';
import { joinType } from '../utils/commandTypes';
import { joinsToString } from '../utils/commandHelpers';

export function join <C extends collections>({collection, params}: censusRequest<C>, joins: joinType[]): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:join': joinsToString(joins),
        },
    };
}
