import { requestFactory } from '../utils/Helpers';
import experience from '../types/experience';

export type typeData = experience;

export type query = Partial<{
    description: string,
    experience_id: string,
    xp: string
}>;

export default requestFactory<'experience'>('experience');
