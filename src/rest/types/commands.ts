import {Conditions, Format, PartialPaths, Paths, Resolvables} from './collection';
import {CBoolean} from './census';
import {Collections} from '../collections';

export interface Join<C extends Collections, J extends Collections> {
    type: J;
    on?: Paths<C>;
    to?: Paths<J>;
    list?: CBoolean;
    inject_at?: string;
    terms?: Conditions<C>;
    outer?: CBoolean;
    show?: PartialPaths<C>[];
    hide?: PartialPaths<C>[];
    nested?: Join<J, any>[];
}

export type Resolve<C extends Collections> = Resolvables<C> | [Resolvables<C>, string[]];

export type Sort<C> = Paths<Format<C>> | [Paths<Format<C>>, 1 | -1];

export interface Tree<C> {
    field: Paths<C>;
    list?: 0 | 1;
    prefix?: string;
    start?: string;
}

export interface Lang {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    tr: string;
}

export type Langs = 'en' | 'de' | 'es' | 'fr' | 'it' | 'tr';
