import { CollectionNames } from './collection';

export type CensusBoolean = '0' | '1' | Boolean;

export interface Timings {
  'item-ms': number;
  'total-ms': number;
}

export type CensusGetResponse<C extends CollectionNames, T> = {
  [K in `${C}_list`]: T[];
} & { timing: Timings };
