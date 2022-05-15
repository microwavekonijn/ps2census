export class Queue<T> {
  private readonly queue = new Set<T>();

  enqueue(item: T): void {
    this.queue.add(item);
  }

  dequeue(): T {
    const [item] = this.queue;

    if (!item) throw new Error('Queue is empty');

    this.queue.delete(item);
    return item;
  }

  get size(): number {
    return this.queue.size;
  }
}
