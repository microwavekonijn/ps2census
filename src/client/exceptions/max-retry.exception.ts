import { CensusRestException, CensusServerError } from '../../rest';
import { Query } from '../../rest/types/query';

export class MaxRetryException extends Error {
    constructor(
        readonly query: Query<any, any>,
        readonly conditions: Record<any, any>,
        readonly attempts: (CensusRestException | CensusServerError)[],
    ) {
        super('Beep');

        this.name = 'MaxRetryException';
    }
}
