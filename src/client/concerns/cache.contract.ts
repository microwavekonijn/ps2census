export interface CacheContract {
  put(key: string, data: any): Promise<void> | void;

  fetch(key: string): Promise<any | null> | any | null;

  forget(key: string): Promise<void> | void;

  forgetAll(): Promise<void> | void;
}
