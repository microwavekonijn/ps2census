import { defineCensusType } from './Base';

export type metagameEventStateData = {
    metagame_event_state_id: string,
    name: string,
};

export type metagameEventStateQuery = Partial<metagameEventStateData>

export default defineCensusType<metagameEventStateQuery, metagameEventStateData[]>('metagame_event_state');
