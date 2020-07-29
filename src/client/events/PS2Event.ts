import Client from '../Client';
import { PS2EventData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';
import { unixToDate } from '../utils/Helpers';

export default abstract class PS2Event<T extends PS2EventData = PS2EventData> {
    public readonly emit: Events;

    public readonly event_name: string;
    public readonly timestamp: Date;
    public readonly world_id: string;

    /**
     * @param {Client} client
     * @param {PS2EventData} data
     */
    public constructor(
        protected readonly client: Client,
        data: T,
    ) {
        this.hydrateObject(data);
    }

    /**
     * @param {PS2EventData} data
     * @private
     */
    private hydrateObject(data: T) {
        Object.assign(this, data, {timestamp: unixToDate(data.timestamp)});

        this.cast(data);
    }

    /**
     * Cast additional to types
     *
     * @param data
     * @protected
     */
    protected cast(data: T): void {
    }

    /**
     * @return {string} hash of the event
     */
    public abstract toHash(): string;
}
