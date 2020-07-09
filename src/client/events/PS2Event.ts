import Client from '../Client';
import { PS2EventType } from '../utils/PS2Events';
import { Events } from '../..';

export default abstract class PS2Event {
    public readonly emit: Events;

    public readonly event_name: string;
    public readonly timestamp: string;

    /**
     *
     * @param {Client} client
     * @param {PS2EventType} data
     */
    public constructor(
        protected readonly client: Client,
        data: PS2EventType,
    ) {
        Object.assign(this, data);
    }

    public abstract toHash(): string;
}
