import { baseOperations, baseRequest } from '../baseTypes';

export function requestFactory<Q, T, O extends baseOperations, R>(type: string): baseRequest<Q, T, O, R> {
    return Object.freeze({
        type,
        params: Object.freeze({}),
    });
}

export function setParam<Q, T, O extends baseOperations, R>({type, params}: baseRequest<Q, T, O, R>, key: string, value: any): baseRequest<Q, T, O, R> {
    return Object.freeze({
        type,
        params: {...params, [key]: value},
    });
}
