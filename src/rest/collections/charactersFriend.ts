import { requestFactory } from '../utils/requestHelpers';
import { characterFriends } from '../types/characterFriends';
import { character } from '../types/character';
import { characterWorld } from '../types/characterWorld';

export type typeData = characterFriends & {
    friend_list: (character & characterWorld)[], // character/character_name and world
};

export type query = { character_id: string };

export type resolve =
    'character'
    | 'character_name'
    | 'world';

export const charactersFriend = requestFactory<'characters_friend'>('characters_friend');
