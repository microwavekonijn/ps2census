import { Join, Sort, Tree } from '../types/command';
import { Query } from '../types/query';

export function hasLimitPerDB(query: Query<unknown, unknown>): boolean {
    return !!query.params.limitPerDB;
}

export function hasLimit(query: Query<unknown, unknown>): boolean {
    return !!query.params.limit;
}

export function fieldsToString(fields: string[]): string {
    return fields.join(',');
}

export function joinsToString(joins: Join[]): string {
    return joins.map(join => {
        let nested: Join[] = [];

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
            join += `(${joinsToString(nested)})`;

        return join;
    }).join(',');
}

export function resolveToString<R>(resolve: (R | [R, string[]])[]): string {
    return resolve.map(r => Array.isArray(r) ? `${r[0]}(${r[1].join(',')})` : r).join(',');
}

export function sortToString(fields: Sort[]): string {
    return fields.map(f => Array.isArray(f) ? f.join(':') : f).join(',');
}

export function treeToString(tree: Tree): string {
    return Object.keys(tree) // @ts-ignore
        .filter(k => k !== 'field' && tree[k] !== undefined) // @ts-ignore
        .reduce((a, k) => `${a}^${k}:${tree[k]}`, tree.field);
}
