export interface Lang {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    tr: string;
}

export type Langs = keyof Lang;

export interface TimingType {
    'item-ms': number;
    'total-ms': number;
}

// TODO: Maybe they should be the other way around or be combinable?
// export type CensusResponse<C, Q extends Query<C>> =
//     R extends CensusTreeRequest<C>
//         ? Tree<Collections[C]>
//         : R extends CensusDistinctRequest<C>
//         ? Distinct<string>
//         : Collections[C][];
//
// export type Tree<T> = [Record<string, T[]>];
//
// export type Distinct<T> = [{ T: string[] }]
