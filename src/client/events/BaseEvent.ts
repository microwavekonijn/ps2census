import Client from '../Client';

export default abstract class BaseEvent {
    public constructor(
        protected readonly client: Client,
        data: any,
    ) {
        Object.assign(this, data);
    }

    public abstract toHash(): string;
}
