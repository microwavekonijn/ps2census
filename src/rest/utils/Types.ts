export type PS2EnvironmentAPI = 'ps2' | 'ps2ps4us' | 'ps2ps4eu';

export type requestOpts = {
    environment: PS2EnvironmentAPI
    serviceId?: string,
    show?: string,
    hide?: string,
    sort?: string,
    has?: string,
    resolve?: string,
    case?: boolean,
    limit?: number,
    limitPerDB?: number,
    start?: number,
    includeNull?: number,
    lang?: 'en' | 'de' | 'es' | 'fr' | 'it' | 'tr',
    join?: string,
    tree?: string,
    timing?: boolean,
    exactMatchFirst?: boolean,
    distinct?: string,
    retry?: boolean
}
