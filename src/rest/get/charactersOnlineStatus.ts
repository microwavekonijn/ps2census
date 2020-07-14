import { defineCensusType } from '../Base';

export type charactersOnlineStatusData = {
    character_id: string,
    online_status: string,
};

export default defineCensusType<Partial<charactersOnlineStatusData>, charactersOnlineStatusData[]>(
    'characters_online_status',
    character_id => ({character_id}),
    data => data[0],
);
