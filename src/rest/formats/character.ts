export interface character {
    character_id: string;
    name: {
        first: string;
        first_lower: string;
        [prop: string]: unkown;
    };
    faction_id: string;
    head_id: string;
    title_id: string;
    times: {
        creation: string;
        creation_date: string;
        last_save: string;
        last_save_date: string;
        last_login: string;
        last_login_date: string;
        login_count: string;
        minutes_played: string;
        [prop: string]: unkown;
    };
    certs: {
        earned_points: string;
        gifted_points: string;
        spent_points: string;
        available_points: string;
        percent_to_next: string;
        [prop: string]: unkown;
    };
    battle_rank: {
        percent_to_next: string;
        value: string;
        [prop: string]: unkown;
    };
    profile_id: string;
    daily_ribbon: {
        count: string;
        time: string;
        date: string;
        [prop: string]: unkown;
    };
    prestige_level: string;
    [prop: string]: unkown;
}
