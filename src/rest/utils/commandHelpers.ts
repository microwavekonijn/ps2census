import { Query } from '../types/query';
import { Join } from '../commands/join';
import { Sort } from '../commands/sort';
import { Tree } from '../commands/tree';

export function hasLimitPerDB(query: Query<unknown, unknown>): boolean {
    return !!query.params.limitPerDB;
}

export function hasLimit(query: Query<unknown, unknown>): boolean {
    return !!query.params.limit;
}

export function fieldsToString(fields: string[]): string {
    return fields.join(',');
}

export function joinsToString<C>(joins: Join<C>[]): string {
    return joins.map(join => {
        let str = typeof join === 'string' ? join : join.type;

        if (typeof join !== 'string') {
            if (join.on)
                str += `^on:${join.on}`;

            if (join.to)
                str += `^to:${join.to}`;

            if (join.list)
                str += `^list:${join.list ? 1 : 0}`;

            if (join.inject_at)
                str += `^inject_at:${join.inject_at}`;

            if (join.terms)
                str += `^terms:${join.terms}`;

            if (join.outer)
                str += `^outer:${join.outer ? 1 : 0}`;

            if (join.show)
                str += `^show:${join.show.join('\'')}`;
            else if (join.hide)
                str += `^hide:${join.hide.join('\'')}`;

            if (join.nested && join.nested.length > 0)
                str += `(${joinsToString(join.nested)})`;
        }

        return str;
    }).join(',');
}

export function resolveToString<R>(resolve: (R | [R, string[]])[]): string {
    return resolve.map(r => Array.isArray(r) ? `${r[0]}(${r[1].join(',')})` : r).join(',');
}

export function sortToString<C>(fields: Sort<C>[]): string {
    return fields.map(f => Array.isArray(f) ? f.join(':') : f).join(',');
}

export function treeToString<C>(tree: Tree<C>): string {
    let str = tree.field;

    if (tree.list)
        str += `^list:${tree.list}`;

    if (tree.prefix)
        str += `^prefix:${tree.prefix}`;

    if (tree.start)
        str += `^start:${tree.start}`;

    return str;
}
