// TODO: Improve type
export interface characterEvent  {
    character_id: string;
    achievement_id: string;
    timestamp: string;
    zone_id: string;
    world_id: string;
    event_type: string;
    table_type: string;

    item_id: string;
    item_count: string;
    context: string;
    [prop: string]: unknown;
}
