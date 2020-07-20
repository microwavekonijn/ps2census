import { baseOperations, baseRequest } from '../baseTypes';

export function requestFactory<Q, T, O extends baseOperations, R>(type: string): baseRequest<Q, T, O, R> {
    return Object.freeze({
        type,
        extract: (data: any) => data[`${type}_list`],
        params: Object.freeze({}),
    });
}

export function setParam<Q, T, O extends baseOperations, R>({type, extract, params}: baseRequest<Q, T, O, R>, key: string, value: any): baseRequest<Q, T, O, R> {
    return Object.freeze({
        type,
        extract,
        params: Object.freeze({...params, [key]: value}),
    });
}

export function setExtract<Q, T, TN, O extends baseOperations, R>({type, params}: baseRequest<Q, T, O, R>, extract: (data: any) => TN): baseRequest<Q, TN, O, R> {
    return Object.freeze({
        type,
        extract,
        params: params,
    });
}
