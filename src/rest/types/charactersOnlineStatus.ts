import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    character_id: string,
    online_status: string,
};

export type query = {
    character_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('charactersOnlineStatus');
