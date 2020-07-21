export default class CensusServerError extends Error {
    public readonly code: string;

    public constructor(data: any) {
        super(data.errorMessage ?? 'Error message not supplied');

        this.name = 'CensusServerError';
        this.code = data.errorCode;
    }
}
