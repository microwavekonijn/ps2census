import { requestFactory } from '../utils/requestHelpers';

export { experience as experienceFormat } from '../formats/experience';

export type experienceQuery = Partial<{
    description: string,
    experience_id: string,
    xp: string
}>;

export const experience = requestFactory<'experience'>('experience');
