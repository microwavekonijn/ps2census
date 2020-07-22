import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    fire_mode_id: string,
    projectile_id: string,
};

export type query = {
    fire_mode_id: string,
    projectile_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fireModeToProjectile');
