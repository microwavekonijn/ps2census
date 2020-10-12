import { requestFactory } from '../utils/requestHelpers';

export { fireGroupToFireMode as fireGroupToFireModeFormat } from '../formats/fireGroupToFireMode';

export type fireGroupToFireModeQuery = Partial<{
    fire_group_id: string,
    fire_mode_id: string,
    fire_mode_index: string
}>;

export const fireGroupToFireMode = requestFactory<'fire_group_to_fire_mode'>('fire_group_to_fire_mode');
