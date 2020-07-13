export default class NotFoundException extends Error {
    public constructor() {
        super('Not found');

        this.name = 'NotFoundException';
    }
}
