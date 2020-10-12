import { requestFactory } from '../utils/requestHelpers';
import { profile2 } from '../types/profile2';

export type typeData = profile2;

export type query = Partial<{
    description: string,
    profile_id: string
}>;

export const profile2 = requestFactory<'profile_2'>('profile_2');
