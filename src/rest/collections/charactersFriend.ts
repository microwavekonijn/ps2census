import { characterFriends } from '../formats/characterFriends';
import { character } from '../formats/character';
import { characterWorld } from '../formats/characterWorld';

export interface CharactersFriend {
    collection: 'characters_friend';

    format: characterFriends & {
        friend_list: (character & characterWorld)[], // character/character_name and world
    };

    conditions: { character_id: string };

    resolve:
        'character'
        | 'character_name'
        | 'world';
}
