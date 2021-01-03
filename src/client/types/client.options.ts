import { PS2Environment } from '../../types/ps2.options';
import { CharacterManagerOptions, RestManagerOptions } from './manager.options';
import { EventStreamManagerOptions } from './stream.options';

export interface ClientOptions {
    environment?: PS2Environment;
    streamManagerConfig?: EventStreamManagerOptions;
    restManager?: RestManagerOptions;
    characterManager?: CharacterManagerOptions;
}

