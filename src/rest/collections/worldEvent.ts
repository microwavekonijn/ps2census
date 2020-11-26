import { Limitable } from '../types/collection';
import { worldEvent } from '../formats/worldEvent';

export interface WorldEvent extends Limitable {
    collection: 'world_event';

    format: worldEvent;

    conditions: { world_id: string } & Partial<{
        after: string,
        before: string,
        id: string,
        type: string,
    }>;
}
