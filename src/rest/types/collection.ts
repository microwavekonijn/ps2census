export interface Resolvable<R> {
    resolve: R;
}

export interface Countable {
}

export interface Limitable {
}

export interface Startable {
}

export interface DefaultCollection extends Countable, Limitable, Startable {
}

interface Conditioned<S extends Record<any, any>> {
    conditions: S;
}

export type Conditions<C> = C extends Conditioned<infer S> ? S : never;

export type Format<C> = C extends { format: infer F } ? F : never;

export type Resolve<C> = C extends Resolvable<infer R> ? R : never;
