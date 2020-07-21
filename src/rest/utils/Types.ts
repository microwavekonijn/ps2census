import { commands, baseRequest, operations } from '../baseTypes';

export type ApplyOperation<E, O extends operations, Q, T, C extends commands, R> = E extends O ? baseRequest<O, Q, T, Exclude<C, E>, R> : never;

export type lang = {
    en: string,
    de: string,
    es: string,
    fr: string,
    it: string,
    tr: string
}
export type langs = keyof lang;
