import { ApplyOperation, baseRequest, commands, langs, operations } from './utils/Types';
import { setParam } from './utils/Helpers';

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, lang: langs): ApplyOperation<'lang', O, Q, T, C, R> {
    // @ts-ignore
    return setParam(request, 'c:lang', lang);
}
