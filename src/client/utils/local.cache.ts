import { CacheContract } from '../concerns/cache.contract';

export class LocalCacheOptions {
  readonly maxEntries?: number;
}

export class LocalCache implements CacheContract {
  private readonly cache = new Map<string, any>();

  private readonly maxEntries: number;

  constructor(options?: LocalCacheOptions) {
    this.maxEntries = options?.maxEntries ?? 1000;
  }

  async put(key: string, data: any): Promise<void> {
    if (!this.cache.has(key) && this.cache.size >= this.maxEntries)
      this.pruneOldest();

    this.cache.set(key, data);
  }

  async fetch(key: string): Promise<any | null> {
    return this.cache.get(key) ?? null;
  }

  async forget(key: string): Promise<void> {
    this.cache.delete(key);
  }

  async forgetAll(): Promise<void> {
    this.cache.clear();
  }

  private pruneOldest(): void {
    const [[key]] = this.cache;

    this.cache.delete(key);
  }
}
