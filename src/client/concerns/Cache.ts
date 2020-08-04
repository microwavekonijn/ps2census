export default interface Cache {
    put(key: string, data: any): Promise<void>;

    remember(key: string, cb: () => Promise<void>): Promise<void>;

    forget(key: string): Promise<boolean>;

    forgetAll(): Promise<void>;
}
