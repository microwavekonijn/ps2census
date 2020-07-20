import { baseOperations, baseRequest } from '../baseTypes';

export type ApplyOperation<E, Q, T, O extends baseOperations, R> = E extends O ? baseRequest<Q, T, Exclude<O, E>, R> : never;

export type lang = {
    en: string,
    de: string,
    es: string,
    fr: string,
    it: string,
    tr: string
}
export type langs = keyof lang;
