import {Conditions, PartialPaths, Paths} from './types/collection';
import {RestClient} from './rest.client';
import {CensusResponse} from './utils/census-response';
import {PS2Environment} from '../types/ps2.options';
import {Join, Langs, Resolve, Sort, Tree} from './types/commands';
import {CBoolean} from './types/census';
import {Collections} from './collections';

/**
 * GetQuery commands uses clone to make sure the types are correct
 */
export class GetQuery<C extends Collections> {
    private readonly params: Record<string, string | number | boolean> = {};

    constructor(
        private readonly census: RestClient,
        public readonly collection: C,
    ) {
    }

    /**
     *
     *
     * @param x
     */
    case(x: CBoolean): GetQuery<C> {
        return this.clone().set('c:case', x);
    }

    /**
     *
     * @param field
     */
    distinct(field: Paths<C>): GetQuery<C> {
        return this.clone().set('c:distinct', field);
    }

    /**
     *
     * @param x
     */
    exactMatchFirst(x: CBoolean): GetQuery<C> {
        return this.clone().set('c:exactMatchFirst', x);
    }

    /**
     *
     * @param field
     */
    has(field: PartialPaths<C>): GetQuery<C> {
        return this.clone().set('c:has', field);
    }

    /**
     *
     * @param x
     */
    hide(x: PartialPaths<C>[]): GetQuery<C> {
        return this.clone().set('c:hide', x.join(','));
    }

    /**
     *
     * @param x
     */
    includeNull(x: CBoolean): GetQuery<C> {
        return this.clone().set('c:includeNull', x);
    }

    /**
     *
     * @param joins
     */
    join(...joins: Join<C, any>[]): GetQuery<C> {
        return this.clone().set('c:join', this.joinToString(joins));
    }

    /**
     *
     * @param x
     */
    lang(x: Langs): GetQuery<C> {
        return this.clone().set('c:lang', x);
    }

    /**
     *
     * @param x
     */
    limit(x: number): GetQuery<C> {
        return this.clone().set('c:limit', x);
    }

    /**
     *
     * @param x
     */
    limitPerDB(x: number): GetQuery<C> {
        return this.clone().set('c:limitPerDB', x);
    }

    /**
     *
     * @param x
     */
    resolve(...x: Resolve<C>[]): GetQuery<C> {
        return this.clone().set('c:resolve', x.map(s => Array.isArray(s) ? `${s[0]}:${s[1]}` : s).join(','));
    }

    /**
     *
     * @param x
     */
    retry(x: CBoolean): GetQuery<C> {
        return this.clone().set('c:retry', x);
    }

    /**
     *
     * @param x
     */
    show(x: PartialPaths<C>[]): GetQuery<C> {
        return this.clone().set('c:show', x.join(','));
    }

    /**
     *
     * @param x
     */
    sort(...x: Sort<C>[]): GetQuery<C> {
        return this.clone().set('c:sort', x.map(s => Array.isArray(s) ? `${s[0]}:${s[1]}` : s).join(','));
    }

    /**
     *
     * @param x
     */
    start(x: number): GetQuery<C> {
        return this.clone().set('c:start', x);
    }

    /**
     *
     * @param x
     */
    timing(x: CBoolean): GetQuery<C> {
        return this.clone().set('c:timing', x);
    }

    /**
     *
     * @param tree
     */
    tree(tree: Tree<C>): GetQuery<C> {
        let str: string = tree.field;

        if (tree.list)
            str += `^list:${tree.list}`;

        if (tree.prefix)
            str += `^prefix:${tree.prefix}`;

        if (tree.start)
            str += `^start:${tree.start}`;

        return this.clone().set('c:tree', str);
    }

    /**
     *
     * @param environment
     * @param query
     */
    async get(environment: PS2Environment, query: Conditions<C>): Promise<any> {
        return new CensusResponse(
            this.collection,
            await this.census.fetch(environment, 'get', this.collection, {...this.params, ...query})
        );
    }

    /**
     *
     * @param key
     * @param value
     * @private
     */
    private set(key: string, value: any): this {
        this.params[key] = value;

        return this;
    }

    /**
     *
     * @private
     */
    private clone(): GetQuery<C> {
        return Object.assign(new GetQuery(this.census, this.collection), {params: this.params});
    }

    /**
     *
     * @param joins
     * @private
     */
    private joinToString(joins: Join<any, any>[]): string {
        return joins.map(join => {
            let str = join.type;

            if (join.on)
                str += `^on:${join.on}`;

            if (join.to)
                str += `^to:${join.to}`;

            if (join.list)
                str += `^list:${join.list}`;

            if (join.inject_at)
                str += `^inject_at:${join.inject_at}`;

            if (join.terms)
                str += `^terms:${
                    Object.entries(join.terms)
                        .map((k, v) => `${k}=${Array.isArray(v) ? v.join(',') : v}`)
                        .join('\`')
                }`;

            if (join.outer)
                str += `^outer:${join.outer}`;

            if (join.show)
                str += `^show:${join.show.join('\'')}`;
            else if (join.hide)
                str += `^hide:${join.hide.join('\'')}`;

            if (join.nested && join.nested.length > 0)
                str += `(${this.joinToString(join.nested)})`;

            return str;
        }).join(',');
    }
}
