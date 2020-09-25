import { censusRequest, collections } from './requestTypes';
import collectionIndex from '../indexes/collectionIndex';

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

export type Tree<T> = [Record<string, T[]>];

export type Distinct<T> = [{ T: string[] }]
