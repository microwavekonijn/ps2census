// TODO: Same as characterEvent?????
export interface event  {
    character_id: string;
    achievement_id: string;
    timestamp: string;
    zone_id: string;
    world_id: string;
    event_type: string;
    table_type: string;
    [prop: string]: unkown;
}
