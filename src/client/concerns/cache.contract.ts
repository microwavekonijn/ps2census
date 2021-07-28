export interface CacheContract {
    put(key: string, data: any): Promise<void>;

    fetch(key: string): Promise<any | null>;

    forget(key: string): Promise<void>;

    forgetAll(): Promise<void>;
}
