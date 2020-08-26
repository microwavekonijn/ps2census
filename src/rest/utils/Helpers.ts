import { baseRequest, joinType, sortType, treeType } from './Types';

export function requestFactory<C>(collection: C): baseRequest<C> {
    return Object.freeze({
        collection,
        params: Object.freeze({}),
    });
}

export function setParam<C>({collection, params}: baseRequest<C>, key: string, value: any): baseRequest<C> {
    return {
        collection,
        params: {...params, [key]: value},
    };
}

export function hasLimitPerDB<C>(request: baseRequest<C>): boolean {
    return !!request.params.limitPerDB;
}

export function hasLimit<C>(request: baseRequest<C>): boolean {
    return !!request.params.limit;
}

export function fieldsToString(fields: string[]): string {
    return fields.join(',');
}

export function joinsToString(joins: joinType[]): string {
    return joins.map(join => {
        let nested: joinType[] = [];

        if (Array.isArray(join)) {
            nested = join[1];
            join = join[0];
        }

        if (typeof join !== 'string') {
            let s = join.type;

            if (join.on) s += `^on:${join.on}`;
            if (join.to) s += `^to:${join.to}`;
            if (join.list) s += `^list:${join.list ? 1 : 0}`;
            if (join.inject_at) s += `^inject_at:${join.inject_at}`;
            if (join.terms) s += `^terms:${join.terms}`;
            if (join.outer) s += `^outer:${join.outer ? 1 : 0}`;
            if (join.show) s += `^show:${join.show.join('\'')}`;
            else if (join.hide) s += `^hide:${join.hide.join('\'')}`;

            join = s;
        }

        if (nested.length)
            join += `(${joinsToString(nested)})`

        return join;
    }).join(',');
}

export function resolveToString(resolve: (string | [string, string[]])[]): string {
    return resolve.map(r => Array.isArray(r) ? `${r[0]}(${r[1].join(',')})` : r).join(',');
}

export function sortToString(fields: sortType[]): string {
    return fields.map(f => Array.isArray(f) ? f.join(':') : f).join(',');
}

export function treeToString(tree: treeType): string {
    return Object.keys(tree) // @ts-ignore
        .filter(k => k !== 'field' && tree[k] !== undefined) // @ts-ignore
        .reduce((a, k) => `${a}^${k}:${tree[k]}`, tree.field);
}
