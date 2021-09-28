import {CollectionNames, Conditions, PartialPaths, Paths, Resolvables} from './collection';
import {CensusBoolean} from './census';

export type Commands =
    | 'case'
    | 'distinct'
    | 'exactMatchFirst'
    | 'has'
    | 'hide'
    | 'includeNull'
    | 'join'
    | 'lang'
    | 'limit'
    | 'limitPerDB'
    | 'resolve'
    | 'retry'
    | 'show'
    | 'sort'
    | 'start'
    | 'timing'
    | 'tree';

export type CommandParamKeys = `c:${Commands}`;

export type CommandParams = { [K in CommandParamKeys]?: string | number | boolean };

export interface Join<C extends CollectionNames, J extends CollectionNames> {
    type: J;
    on?: Paths<C>;
    to?: Paths<J>;
    list?: CensusBoolean;
    inject_at?: string;
    terms?: Conditions<C>;
    outer?: CensusBoolean;
    show?: PartialPaths<C>[];
    hide?: PartialPaths<C>[];
    nested?: Join<J, any>[];
}

export type Resolve<C extends CollectionNames> = Resolvables<C> | [Resolvables<C>, string[]];

export type Sort<C extends CollectionNames> = Paths<C> | [Paths<C>, 1 | -1];

export interface Tree<C extends CollectionNames> {
    field: Paths<C>;
    list?: 0 | 1;
    prefix?: string;
    start?: string;
}

export type Langs = 'en' | 'de' | 'es' | 'fr' | 'it' | 'tr';
