export type CharactersFriend = {
  collection: 'characters_friend';
  format: {
    character_id: string;
    name: string;
    friend_list: {
      character_id: string;
      last_login_time: string;
      online: string;
    }[];
  };
  paths:
    | 'character_id'
    | 'name'
    | 'friend_list.character_id'
    | 'friend_list.last_login_time'
    | 'friend_list.online';
  partialPaths:
    | 'character_id'
    | 'name'
    | 'friend_list'
    | 'friend_list.character_id'
    | 'friend_list.last_login_time'
    | 'friend_list.online';
  conditions: { character_id: string };
  resolve: 'character' | 'character_name' | 'world';
};
