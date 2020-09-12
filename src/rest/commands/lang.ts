import { censusRequest, collections} from '../utils/requestTypes';
import { langs } from '../utils/responseTypes';

export default function <C extends collections>({collection, params}: censusRequest<C>, lang: langs): censusRequest<C> {
    return {
        collection,
        params: {
            ...params,
            'c:lang': lang,
        },
    };
}
