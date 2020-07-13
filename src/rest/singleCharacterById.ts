import { defineCensusType } from './Base';

export type singleCharacterById = {
    character_id: string,
    name: {
        first: string,
        first_lower: string
    },
    faction_id: string,
    head_id: string,
    title_id: string,
    times: {
        creation: string,
        creation_date: string,
        last_save: string,
        last_save_date: string,
        last_login: string,
        last_login_date: string,
        login_count: string,
        minutes_played: string
    },
    certs: {
        earned_points: string,
        gifted_points: string,
        spent_points: string,
        available_points: string,
        percent_to_next: string
    },
    battle_rank: {
        percent_to_next: string,
        value: string
    },
    profile_id: string,
    daily_ribbon: {
        count: string,
        time: string,
        date: string
    },
    prestige_level: string,
    currency: {
        currency_id: string,
        currency_name: string,
        quantity: string,
        prestige_currency: string
    },
    stats: {},
    items: [],
    sub_timing: {}
};

/**
 * Query:
 * character_id: string
 */
export default defineCensusType<string, singleCharacterById>(
    'single_character_by_id',
    character_id => ({character_id}),
    data => data[0],
);
