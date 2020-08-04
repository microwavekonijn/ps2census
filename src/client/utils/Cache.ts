import { default as CacheContract } from '../concerns/Cache';

// TODO: Make cached entries readonly/freeze them?
export default class Cache implements CacheContract {
    private readonly cache = new Map<string, any>();
    private readonly retrieving = new Map<string, Promise<any>>();

    public constructor(
        private readonly maxEntries = 1000,
    ) {}

    public async remember(key: string, cb: () => Promise<void>): Promise<void> {
        let data = this.cache.get(key);

        if (!data) {
            let retrieve = this.retrieving.get(key);

            if (!retrieve) {
                retrieve = cb();
                this.retrieving.set(key, retrieve);
            }

            data = await retrieve;
            await this.put(key, data);
        }

        return data;
    }

    public async put(key: string, data: any): Promise<void> {
        if (!this.cache.has(key) && this.cache.size >= this.maxEntries)
            this.pruneOldest();

        this.cache.set(key, data);
    }

    public async forget(key: string): Promise<boolean> {
        return this.cache.delete(key);
    }

    public async forgetAll(): Promise<void> {
        return this.cache.clear();
    }

    private pruneOldest(): void {
        const [[key]] = this.cache;

        this.cache.delete(key);
    }
}
