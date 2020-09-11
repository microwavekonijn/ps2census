import { requestFactory } from '../utils/requestHelpers';
import experience from '../types/experience';

export type typeData = experience;

export type query = Partial<{
    description: string,
    experience_id: string,
    xp: string
}>;

export default requestFactory<'experience'>('experience');
