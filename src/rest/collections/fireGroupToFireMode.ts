import { requestFactory } from '../utils/Helpers';
import fireGroupToFireMode from '../types/fireGroupToFireMode';

export type typeData = fireGroupToFireMode;

export type query = Partial<{
    fire_group_id: string,
    fire_mode_id: string,
    fire_mode_index: string
}>;

export default requestFactory<'fire_group_to_fire_mode'>('fire_group_to_fire_mode');
