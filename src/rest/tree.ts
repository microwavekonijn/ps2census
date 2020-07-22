import { ApplyOperation, baseRequest, commands, operations } from './utils/Types';
import { setParam } from './utils/Helpers';

export type treeType = {
    field: string,
    list?: 0 | 1,
    prefix?: string,
    start?: string
}

function treeToString(tree: treeType): string {
    let r = tree.field;

    [
        'list',
        'prefix',
        'start',
    ].forEach(k => {
        // @ts-ignore
        if (tree[k]) r += `^${k}:${tree[k]}`;
    });

    return r;
}

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, tree: treeType): ApplyOperation<'tree', O, Q, any, C, R> {
    // @ts-ignore
    return setParam(request, 'c:tree', treeToString(tree));
}
