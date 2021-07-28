export class CensusRestException extends Error {
    constructor(message: string) {
        super(message);

        this.name = 'CensusRestException';
    }

    hasNoData(): boolean {
        return this.message.includes('No data found.');
    }

    requiresServiceId(): boolean {
        return this.message.includes('Missing Service ID.');
    }
}
