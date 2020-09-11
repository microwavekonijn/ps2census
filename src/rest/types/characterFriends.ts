export default characterFriends;

type characterFriends = {
    character_id: string,
    name: string,
    friend_list: {
        character_id: string,
        last_login_time: string,
        online: string,
        [prop: string]: any,
    }[],
    [prop: string]: any,
};
