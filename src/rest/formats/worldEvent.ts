export interface worldEvent  {
    facility_id: string;
    faction_old: string;
    faction_new: string;
    duration_held: string;
    objective_id: string;
    timestamp: string;
    zone_id: string;
    world_id: string;
    event_type: string;
    table_type: string;
    outfit_id: string;
    [prop: string]: unkown;
}
