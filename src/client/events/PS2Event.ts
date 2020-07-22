import Client from '../Client';
import { PS2EventData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';
import { toBoolean, unixToDate } from '../utils/Helpers';

export default abstract class PS2Event {
    public readonly emit: Events;

    protected readonly booleans: string[] = [];

    public readonly event_name: string;
    public readonly timestamp: Date;
    public readonly world_id: string;

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

        // @ts-ignore
        this['timestamp'] = unixToDate(data.timestamp);

        // @ts-ignore
        this.booleans.forEach(key => this[key] = toBoolean(data[key]));
    }

    public abstract toHash(): string;
}
