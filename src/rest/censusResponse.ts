import { TimingType } from './types/response';

export class CensusResponse<T> extends Array<T> {
    public readonly timing?: Readonly<TimingType>;

    constructor(collection: string, data: any) {
        super(data[`${collection}_list`]);

        this.timing = data.timing;
    }
}
