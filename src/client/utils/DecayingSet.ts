import Timeout = NodeJS.Timeout;

export default class DecayingSet<T> {
    private index: number = 0;

    private readonly set: Array<Set<T>>;

    private timeout: Timeout;

    public constructor(private readonly partitions: number, decay: number) {
        this.set = [];

        for (let i = 0; i < partitions; i++)
            this.set.push(new Set());

        this.timeout = setInterval(() => {
            this.index++;
            if (this.index == this.partitions)
                this.index = 0;

            this.set[this.index].clear();

        }, decay / partitions);
    }

    public add(value: T): this {
        this.set[this.index].add(value);

        return this;
    }

    public clear(): void {
        this.set.forEach(set => set.clear());
    }

    public has(value: T): boolean {
        return this.set.some(set => set.has(value));
    }
}
