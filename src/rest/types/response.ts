import { censusDistinctRequest, censusRequest, censusTreeRequest, collections } from './request';
import { collectionIndex } from '../indexes/collectionIndex';

export type lang = {
    en: string,
    de: string,
    es: string,
    fr: string,
    it: string,
    tr: string
};

export type langs = keyof lang;

export type timingType = {
    'item-ms': number,
    'total-ms': number
}

// TODO: Maybe they should be the other way around or be combinable?
export type censusResponse<C extends collections, R extends censusRequest<C>> =
    R extends censusTreeRequest<C>
        ? Tree<collectionIndex[C]>
        : R extends censusDistinctRequest<C>
        ? Distinct<string>
        : collectionIndex[C][];

export type Tree<T> = [Record<string, T[]>];

export type Distinct<T> = [{ T: string[] }]
