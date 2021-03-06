import { CacheContract } from '../concerns/cache.contract';

export class Cache implements CacheContract {
    private readonly cache = new Map<string, any>();
    private readonly retrieving = new Map<string, Promise<any>>();

    constructor(
        private readonly maxEntries = 1000,
    ) {}

    async remember(key: string, cb: () => Promise<void>): Promise<void> {
        let data = this.cache.get(key);

        if (!data) {
            let retrieve = this.retrieving.get(key);

            if (!retrieve) {
                retrieve = cb();
                retrieve.finally(() => this.retrieving.delete(key));
                this.retrieving.set(key, retrieve);
            }

            data = await retrieve;
            await this.put(key, data);
        }

        return data;
    }

    async put(key: string, data: any): Promise<void> {
        if (!this.cache.has(key) && this.cache.size >= this.maxEntries)
            this.pruneOldest();

        this.cache.set(key, data);
    }

    async forget(key: string): Promise<boolean> {
        return this.cache.delete(key);
    }

    async forgetAll(): Promise<void> {
        return this.cache.clear();
    }

    private pruneOldest(): void {
        const [[key]] = this.cache;

        this.cache.delete(key);
    }
}
