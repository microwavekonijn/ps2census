import { defineCensusType } from './Base';

export type charactersEventData = {
    character_id: string,
    achievement_id: string,
    timestamp: string,
    zone_id: string,
    world_id: string,
    event_type: string,
    table_type: string,
};

// TODO: character_id is required
export default defineCensusType<Partial<charactersEventData>, charactersEventData[]>('characters_event');
