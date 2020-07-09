import Client from '../Client';
import { PS2EventData } from '../utils/PS2Events';
import { Events } from '../utils/Contants';

export default abstract class PS2Event {
    public readonly emit: Events;

    public readonly event_name: string;
    public readonly timestamp: string;

    /**
     *
     * @param {Client} client
     * @param {PS2EventData} data
     */
    public constructor(
        protected readonly client: Client,
        data: PS2EventData,
    ) {
        this.hydrateObject(data);
    }

    public hydrateObject(data: PS2EventData) {
        Object.assign(this, data);
    }

    public abstract toHash(): string;
}
