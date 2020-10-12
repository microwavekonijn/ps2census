import { requestFactory } from '../utils/requestHelpers';

export { profile2 as profile2Format } from '../formats/profile2';

export type profile2Query = Partial<{
    description: string,
    profile_id: string
}>;

export const profile2 = requestFactory<'profile_2'>('profile_2');
