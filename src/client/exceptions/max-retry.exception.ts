import { CollectionNames } from '../../rest/types/collection';

export class MaxRetryException extends Error {
  constructor(
    readonly collection: CollectionNames,
    readonly conditions: Record<any, any>,
    readonly attempts: any[],
  ) {
    super(
      `Unable to retrieve data from "${collection}": ${JSON.stringify(
        conditions,
      )}`,
    );

    this.name = MaxRetryException.name;
  }
}
