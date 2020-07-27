import { baseRequest } from './Types';

export function requestFactory<C>(collection: C): baseRequest<C> {
    return Object.freeze({
        collection,
        params: Object.freeze({}),
    });
}

export function setParam<C>({collection, params}: baseRequest<C>, key: string, value: any): baseRequest<C> {
    return {
        collection,
        params: {...params, [key]: value},
    };
}

export function fieldsToString(fields: string[]): string {
    return fields.join(',');
}
