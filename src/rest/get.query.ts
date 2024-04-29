import {
  CollectionNames,
  Conditions,
  Format,
  PartialPaths,
  Paths,
} from './types/collection';
import { CensusResponse } from './utils/census-response';
import {
  CommandParamKeys,
  CommandParams,
  Join,
  Langs,
  Resolve,
  Sort,
  Tree,
} from './types/commands';
import { CensusBoolean, CensusGetResponse } from './types/census';
import { RestContract } from './concern/rest.contract';

/**
 * GetQuery commands uses clone to make sure the types are correct
 */
export class GetQuery<C extends CollectionNames, R = Format<C>> {
  private readonly params: CommandParams = {};

  constructor(
    private readonly census: RestContract,
    public readonly collection: C,
  ) {}

  /**
   * @param x wheter the search should be case sensitive, default by census is true
   */
  case(x: CensusBoolean): GetQuery<C, R> {
    return this.clone().set('c:case', x);
  }

  /**
   * @param path returns a list of unique values of a field, data returned will be an array with a single object that
   * contains one key with the name of the field and as value an array of possible values of the field.
   */
  distinct(path: Paths<C>): GetQuery<C, any> {
    return this.clone().set('c:distinct', path);
  }

  /**
   * @param x if there is an exact match put it at the top of the list
   */
  exactMatchFirst(x: CensusBoolean): GetQuery<C, R> {
    return this.clone().set('c:exactMatchFirst', x);
  }

  /**
   * @param path data entry must have the specified field
   */
  has(path: PartialPaths<C>): GetQuery<C, R> {
    return this.clone().set('c:has', path);
  }

  /**
   * @param paths hide the following fields from the result
   */
  hide(...paths: PartialPaths<C>[]): GetQuery<C, R> {
    return this.clone().set('c:hide', paths.join(','));
  }

  /**
   * @param x include fields that are empty in the results, default by census is false
   */
  includeNull(x: CensusBoolean): GetQuery<C, R> {
    return this.clone().set('c:includeNull', x);
  }

  /**
   * @param joins joins results from other collections into parent collection
   */
  join(...joins: Join<C, any>[]): GetQuery<C, any> {
    return this.clone().set('c:join', this.joinToString(joins));
  }

  /**
   * @param x filters names and descriptions to only include the specified language
   */
  lang(x: Langs): GetQuery<C, R> {
    return this.clone().set('c:lang', x);
  }

  /**
   * @param x limits the number of results
   */
  limit(x: number): GetQuery<C, R> {
    return this.clone().set('c:limit', x);
  }

  /**
   * This command only works on the character collection
   *
   * @param x limits the number of results per database
   */
  limitPerDB(x: number): GetQuery<C, R> {
    return this.clone().set('c:limitPerDB', x);
  }

  /**
   * @param resolve joins data from prepared joins by census
   */
  resolve(...resolve: Resolve<C>[]): GetQuery<C, any> {
    return this.clone().set(
      'c:resolve',
      resolve
        .map(s => (Array.isArray(s) ? `${s[0]}(${s[1].join(',')})` : s))
        .join(','),
    );
  }

  /**
   * @param x retries the query if a query fails on the census server, default by census is true
   */
  retry(x: CensusBoolean): GetQuery<C, R> {
    return this.clone().set('c:retry', x);
  }

  /**
   * @param paths only include specified fields in the results
   */
  show(...paths: PartialPaths<C>[]): GetQuery<C, R> {
    return this.clone().set('c:show', paths.join(','));
  }

  /**
   * @param x sort results by specified fields
   */
  sort(...x: Sort<C>[]): GetQuery<C, R> {
    return this.clone().set(
      'c:sort',
      x.map(s => (Array.isArray(s) ? `${s[0]}:${s[1]}` : s)).join(','),
    );
  }

  /**
   * @param x skips specified number of results
   */
  start(x: number): GetQuery<C, R> {
    return this.clone().set('c:start', x);
  }

  /**
   * @param x add stats to the query to see performance of the census database, default by census is false
   */
  timing(x: CensusBoolean): GetQuery<C, R> {
    return this.clone().set('c:timing', x);
  }

  /**
   * @param tree group data by field
   */
  tree(tree: Tree<C>): GetQuery<C, any> {
    let str: string = tree.field;

    if (tree.list) str += `^list:${tree.list}`;

    if (tree.prefix) str += `^prefix:${tree.prefix}`;

    if (tree.start) str += `^start:${tree.start}`;

    return this.clone().set('c:tree', str);
  }

  /**
   * Execute the query
   *
   * @param query conditions to filter results
   */
  async get(query?: Conditions<C>): Promise<CensusResponse<R>> {
    return new CensusResponse(
      this.collection,
      await this.census.get<C, CensusGetResponse<C, R>>(
        this.collection,
        Object.assign({}, this.params, query),
      ),
    );
  }

  /**
   * @param key
   * @param value
   * @private
   */
  private set(key: CommandParamKeys, value: any): this {
    this.params[key] = value;

    return this;
  }

  /**
   * @private
   */
  private clone(): GetQuery<C, R> {
    return Object.assign(new GetQuery(this.census, this.collection), {
      params: this.params,
    });
  }

  /**
   * @param joins
   * @private
   */
  private joinToString(joins: Join<any, any>[]): string {
    return joins
      .map(join => {
        let str = join.type;

        if (join.on) str += `^on:${join.on}`;

        if (join.to) str += `^to:${join.to}`;

        if (join.list) str += `^list:${join.list}`;

        if (join.inject_at) str += `^inject_at:${join.inject_at}`;

        // A term with a list of values is added multiple times due to the fact that Census is weird.
        if (join.terms)
          str += `^terms:${Object.entries(join.terms)
            .map(([k, v]) =>
              Array.isArray(v)
                ? v.map(sv => `${k}=${sv}`).join('`')
                : `${k}=${v}`,
            )
            .join('`')}`;

        if (join.outer) str += `^outer:${join.outer}`;

        if (join.show) str += `^show:${join.show.join("'")}`;
        else if (join.hide) str += `^hide:${join.hide.join("'")}`;

        if (join.nested && join.nested.length > 0)
          str += `(${this.joinToString(join.nested)})`;

        return str;
      })
      .join(',');
  }
}
