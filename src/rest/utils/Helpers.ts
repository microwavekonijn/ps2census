import { requestOpts } from './Types';

export function generateRequest(params: Record<string, any>, opts: requestOpts) {
    if (typeof params !== 'object')
        throw new TypeError(`Parameter 'params' expected to be a 'object, got a '${typeof params}'`);

    Object.keys(opts).forEach((key) => {
        // @ts-ignore
        params[`c:${key}`] = opts[key];
    });

    return params;
}
