import { baseRequest } from '../utils/Types';
import { setParam } from '../utils/Helpers';

type joinExpression = {
    type: string,
    on?: string,
    to?: string,
    list?: boolean,
    inject_at?: string,
    terms?: Record<string, string>,
    outer?: boolean,
    show?: string[],
    hide?: string[],
};

export type joinType = string | joinExpression | [string | joinExpression, joinType[]]

function joinsToString(joins: joinType[]): string {
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

export default function <C>(request: baseRequest<C>, joins: joinType[]): baseRequest<C> {
    return setParam(request, 'c:join', joinsToString(joins));
}
