import { censusRequest, collections } from './requestTypes';

export function requestFactory<C extends collections>(collection: C): censusRequest<C> {
    return Object.freeze({
        collection,
        params: Object.freeze({}),
    });
}
