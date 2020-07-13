export default class CensusServerError extends Error {
    public readonly code: string;

    public constructor(data: any) {
        super(data.errorMessage);

        this.name = 'CensusServerError';
        this.code = data.errorCode;
    }
}
