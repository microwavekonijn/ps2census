type Path<A extends string, B extends string> = `${A}.${B}`;

export type Paths<T> = {
    [K in keyof T]: K extends string
        ? T[K] extends Array<infer F>
            ? F extends Record<any, any>
                ? Path<K, Paths<F>>
                : K
            : T[K] extends Record<string, any>
                ? Path<K, Paths<T[K]>>
                : K
        : never
}[keyof T];

export type PartialPaths<T> = {
    [K in keyof T]: K extends string
        ? T[K] extends Array<infer F>
            ? F extends Record<any, any>
                ? Path<K, PartialPaths<F>> | K
                : K
            : T[K] extends Record<string, any>
                ? Path<K, PartialPaths<T[K]>> | K
                : K
        : never
}[keyof T];
