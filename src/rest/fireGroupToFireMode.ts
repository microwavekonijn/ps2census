import { defineCensusType } from './Base';

export type fireGroupToFireModeData = {
    fire_group_id: string,
    fire_mode_id: string,
    fire_mode_index: string,
};

export type fireGroupToFireModeQuery = Partial<fireGroupToFireModeData>

export default defineCensusType<fireGroupToFireModeQuery, fireGroupToFireModeData[]>('fire_group_to_fire_mode');
