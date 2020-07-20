import { baseOperations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

// TODO: Fix return type, also distinct with tree possible?
export default function <T, Q, O extends baseOperations, R>(request: baseRequest<Q, T, O, R>, field: string): ApplyOperation<'distinct', Q, any, O, R> {
    // @ts-ignore
    return setParam(request, 'c:show', field);
}
