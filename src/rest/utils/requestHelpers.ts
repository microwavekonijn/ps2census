import { baseRequest, collections } from './requestTypes';

export function requestFactory<C extends collections>(collection: C): baseRequest<C> {
    return Object.freeze({
        collection,
        commands: Object.freeze({}),
        params: Object.freeze({}),
    });
}

export function applyCommand<C extends collections>(request: baseRequest<C>): baseRequest<C> {
    return request;
}

export function setParam<C extends collections>({collection, params}: baseRequest<C>, key: string, value: any): baseRequest<C> {
    return {
        collection,
        commands: {},
        params: {...params, [key]: value},
    };
}

