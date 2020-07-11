export default class CensusRestException extends Error {
    public constructor(message: string) {
        super(message);

        this.name = 'CensusRestException';
    }
}
