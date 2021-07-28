export interface TimingType {
    'item-ms': number;
    'total-ms': number;
}

export class CensusResponse<T> extends Array<T> {
    public readonly timing?: Readonly<TimingType>;

    constructor(collection: string, data: any) {
        super(...data[`${collection}_list`]);

        this.timing = data.timing;
    }
}
