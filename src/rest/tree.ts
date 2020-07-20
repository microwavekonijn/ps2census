import { baseOperations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
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

export default function <T, Q, O extends baseOperations, R>(request: baseRequest<Q, T, O, R>, tree: treeType): ApplyOperation<'tree', Q, any, O, R> {
    // @ts-ignore
    return setParam(request, 'c:tree', treeToString(tree));
}
