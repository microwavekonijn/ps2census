export interface character {
    character_id: string;
    name: {
        first: string;
        first_lower: string;
        [prop: string]: unknown;
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
        [prop: string]: unknown;
    };
    certs: {
        earned_points: string;
        gifted_points: string;
        spent_points: string;
        available_points: string;
        percent_to_next: string;
        [prop: string]: unknown;
    };
    battle_rank: {
        percent_to_next: string;
        value: string;
        [prop: string]: unknown;
    };
    profile_id: string;
    daily_ribbon: {
        count: string;
        time: string;
        date: string;
        [prop: string]: unknown;
    };
    prestige_level: string;
    [prop: string]: unknown;
}
