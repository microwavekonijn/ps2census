import { requestFactory } from '../utils/Helpers';
import outfitMemberExtended from '../types/outfitMemberExtended';

export type typeData = outfitMemberExtended;

export type query = Partial<{
    alias: string,
    alias_lower: string,
    character_id: string,
    leader_character_id: string,
    member_count: string,
    member_rank: string,
    member_rank_ordinal: string,
    member_since: string,
    member_since_date: string,
    name: string,
    name_lower: string,
    outfit_id: string,
    time_created: string,
    time_created_date: string
}>;

export default requestFactory<'outfit_member_extended'>('outfit_member_extended');
