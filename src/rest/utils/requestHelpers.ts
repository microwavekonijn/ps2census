import { censusRequest, collections } from '../types/request';

export function requestFactory<C extends collections>(collection: C): censusRequest<C> {
    return Object.freeze({
        collection,
        params: Object.freeze({}),
    });
}
