import { defineCensusType } from './Base';

export type eventData = {
    // TODO: Empty query leads to server error
};

export default defineCensusType<Partial<eventData>, eventData[]>('event');
