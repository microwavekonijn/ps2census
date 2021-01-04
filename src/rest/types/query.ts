import { Format, Resolve } from './collection';
import { PartialPaths, Paths } from './format';

export type Query<N, C> = {
    collection: N;
    params: Record<string, string | number | boolean>;
}

export type InferCollection<Q> = Q extends Query<any, infer C> ? C : never;

export type InferFormat<Q> = Format<InferCollection<Q>>;

export type InferPaths<Q> = Paths<InferFormat<Q>>;

export type InferPartialPaths<Q> = PartialPaths<InferFormat<Q>>;

export type InferResolve<Q> = Resolve<InferCollection<Q>>;
