import { baseRequest } from '../utils/Types';
import { setParam } from '../utils/Helpers';

export type treeType = {
    field: string,
    list?: 0 | 1,
    prefix?: string,
    start?: string
}

export function treeToString(tree: treeType): string {
    return Object.keys(tree) // @ts-ignore
        .filter(k => k !== 'field' && tree[k] !== undefined) // @ts-ignore
        .reduce((a, k) => `${a}^${k}:${tree[k]}`, tree.field);
}

export default function <C>(request: baseRequest<C>, tree: treeType): baseRequest<C> {
    return setParam(request, 'c:tree', treeToString(tree));
}
