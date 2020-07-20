import { baseOperations, baseRequest } from './baseTypes';
import { ApplyOperation } from './utils/Types';
import { setParam } from './utils/Helpers';

type baseExtendedJoin = {
    type: string,
    on?: string,
    to?: string,
    list?: 0 | 1,
    inject_at?: string,
    terms?: Record<string, string>,
    outer?: 0 | 1
} & ({ 'show': string[] } | { 'hide': string[] })

export type joinType = string | baseExtendedJoin | [string | baseExtendedJoin, joinType[]]

function extendedJoinToString(join: baseExtendedJoin): string {
    let r = `type: ${join['type']}`;

    [
        'on',
        'to',
        'list',
        'inject_at',
        'outer',
    ].forEach(k => {
        // @ts-ignore
        if (join[k]) r += `^${k}:${join[k]}`;
    });

    // @ts-ignore
    if (join.terms) r += `terms:${Object.keys(join.terms).map(k => `${k}=${join.terms[k]}`).join('\'')}`;

    return r;
}

function joinToString(join: joinType): string {
    let nested = '';

    if (Array.isArray(join)) {
        nested = `(${join[1].map(joinToString).join(',')})`;
        join = join[0];
    }

    return (typeof join === 'string' ? join : extendedJoinToString(join)) + nested;
}

// TODO: Fix return type
export default function <T, Q, O extends baseOperations, R>(request: baseRequest<Q, T, O, R>, joins: joinType[]): ApplyOperation<'join', Q, any, O, R> {
    // @ts-ignore
    return setParam(
        request,
        'c:join',
        joins.map(joinToString).join(','),
    );
}
