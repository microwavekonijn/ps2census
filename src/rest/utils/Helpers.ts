import { commands, baseRequest } from '../baseTypes';

export function requestFactory<O extends 'get' | 'count', Q, T, C extends commands, R>(type: string): baseRequest<O, Q, T, C, R> {
    return Object.freeze({
        type,
        extract: (data: any) => data[`${type}_list`],
        params: Object.freeze({}),
    });
}

export function setParam<O extends 'get' | 'count', Q, T, C extends commands, R>({type, extract, params}: baseRequest<O, Q, T, C, R>, key: string, value: any): baseRequest<O, Q, T, C, R> {
    return Object.freeze({
        type,
        extract,
        params: Object.freeze({...params, [key]: value}),
    });
}

export function setExtract<O extends 'get' | 'count', Q, T, TN, C extends commands, R>({type, params}: baseRequest<O, Q, T, C, R>, extract: (data: any) => TN): baseRequest<O, Q, TN, C, R> {
    return Object.freeze({
        type,
        extract,
        params: params,
    });
}
