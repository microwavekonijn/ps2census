import {CensusRestException, CensusServerError} from '../../rest';
import {Collections} from '../../rest/collections';

export class MaxRetryException extends Error {
    constructor(
        readonly collection: Collections,
        readonly conditions: Record<any, any>,
        readonly attempts: (CensusRestException | CensusServerError)[],
    ) {
        super(`Unable to retrieve data from "${collection}": ${JSON.stringify(conditions)}`);

        this.name = 'MaxRetryException';
    }
}
