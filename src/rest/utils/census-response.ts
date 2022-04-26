import { Timings } from '../types/census';

export class CensusResponse<T> extends Array<T> {
  public readonly timing?: Timings;

  constructor(collection: string, data: any) {
    super(...data[`${collection}_list`]);

    this.timing = data.timing;
  }
}
