export type baseRequest<T> = {
    collection: T,
    params: Record<string, any>
};

export type lang = {
    en: string,
    de: string,
    es: string,
    fr: string,
    it: string,
    tr: string
};

export type langs = keyof lang;

export type Tree<T> = Record<string, T[]>;

export type Get<O, K, D = never> = K extends keyof O ? O[K] : D;

