export type PS2Environment = 'ps2' | 'ps2ps4us' | 'ps2ps4eu';

export type Get<O, K, D = never> = K extends keyof O ? O[K] : D;

export type MatchKeys<T, V> = {
    [K in keyof T]-?: T[K] extends V ? K : never
}[keyof T];
