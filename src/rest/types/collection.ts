import { Collections } from '../collections';
import { CommandParams } from './commands';

export type CollectionNames = Collections['collection'];

export type CollectionMap = {
  [K in CollectionNames]: Extract<Collections, { collection: K }>;
};

export type Conditions<C extends CollectionNames> =
  CollectionMap[C]['conditions'];

export type Params<C extends CollectionNames> = Conditions<C> & CommandParams;

export type Format<C extends CollectionNames> = CollectionMap[C]['format'];

export type Paths<C extends CollectionNames> = CollectionMap[C]['paths'];

export type PartialPaths<C extends CollectionNames> =
  CollectionMap[C]['partialPaths'];

export type Resolvables<C extends CollectionNames> = CollectionMap[C] extends {
  resolve: infer R;
}
  ? R
  : never;
