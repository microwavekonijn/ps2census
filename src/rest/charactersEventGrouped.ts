import { defineCensusType } from './Base';

export type characterEventGroupedData = {
    character_id: string,
    table_type: string,
    count: string
};

export default defineCensusType<Partial<characterEventGroupedData>, characterEventGroupedData>('characters_event_grouped');
