import { lang } from '../utils/responseTypes';

export default world;

type world = {
    world_id: string,
    state: string,
    name: lang,
    description: lang,
    [prop: string]: any,
};
