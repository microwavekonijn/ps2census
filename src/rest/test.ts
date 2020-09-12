import { getFactory } from './get';
import character from './collections/character';

const get = getFactory('ps2ps4eu', 'asdasdasd');

get(character, {}).then(data => {

});
