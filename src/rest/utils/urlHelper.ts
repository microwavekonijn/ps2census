import { PS2Environment } from '../../types/ps2.options';

export function createBaseUrl(method: 'get' | 'count', environment: PS2Environment, httpsOnly: boolean, serviceId?: string | null) {
    let baseUrl = `${httpsOnly ? 'https' : 'http'}://census.daybreakgames.com`;
    if (serviceId) baseUrl += `/s:${serviceId}`;
    baseUrl += `/${method}/${environment}:v2`;

    return baseUrl;
}
