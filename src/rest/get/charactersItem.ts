import { defineCensusType } from '../Base';

export type charactersItemData = {
    character_id: string,
    item_id: string,
};

export default defineCensusType<Partial<charactersItemData>, charactersItemData[]>(
    'characters_item',
    character_id => ({character_id}),
    data => data[0],
);
