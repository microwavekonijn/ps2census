import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    character_id: string,
    member_since: string,
    member_since_date: string,
    member_rank: string,
    member_rank_ordinal: string,
    outfit_id: string,
    name: string,
    name_lower: string,
    alias: string,
    alias_lower: string,
    time_created: string,
    time_created_date: string,
    leader_character_id: string,
    member_count: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('outfitMemberExtended');

