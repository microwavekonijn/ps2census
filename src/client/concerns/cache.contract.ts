export interface CacheContract {
    put(key: string, data: any): Promise<void>;

    remember(key: string, cb: () => Promise<any>): Promise<any>;

    forget(key: string): Promise<boolean>;

    forgetAll(): Promise<void>;
}
