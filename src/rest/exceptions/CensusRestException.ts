export class CensusRestException extends Error {
    public constructor(message: string) {
        super(message);

        this.name = 'CensusRestException';
    }

    public hasNoData(): boolean {
        return this.message.includes('No data found.');
    }

    public requiresServiceId(): boolean {
        return this.message.includes('Missing Service ID.');
    }
}
