import { CensusRestException, CensusServerError } from '../../rest';
import { CensusRequest, Collections } from '../../rest/types/request';
import { queryIndex } from '../../rest/indexes/queryIndex';

export class MaxRetryException<C extends Collections> extends Error {
    constructor(
        readonly request: CensusRequest<C>,
        readonly query: queryIndex[C] | undefined,
        readonly attempts: (CensusRestException | CensusServerError)[],
    ) {
        super('Beep');

        this.name = 'MaxRetryException';
    }
}
