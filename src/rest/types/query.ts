export type Query<N, C> = {
    collection: N;
    params: Record<string, string | number | boolean>;
}

export type InferCollection<Q> = Q extends Query<any, infer C> ? C : never;

