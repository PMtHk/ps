function minOperations(nums: number[], k: number): number {
  const mh = new MinHeap();

  nums.forEach((num) => {
    mh.push(num);
  });

  let count = 0;

  while (mh.len() >= 2 && mh.min()! < k) {
    const x = mh.pop()!;
    const y = mh.pop()!;

    const next = Math.min(x, y) * 2 + Math.max(x, y);

    mh.push(next);

    count++;
  }

  return count;
}

class MinHeap {
  private heap: Array<number>;

  constructor() {
    this.heap = [];
  }

  len(): number {
    return this.heap.length
  }

  min(): number | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.heap[0];
  }

  push(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop(): number | null {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.heap[0];
    const lastNode = this.heap.pop()!;

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];

      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }
}
