# 3066. Minimum Operations to Exceed Threshold Value II

주어진 `nums` 배열의 모든 원소를 특정 연산을 적용하여 k 이상으로 만드는 데 필요한 최소 연산 횟수

## 1차 (실패, 7min)

연산은 간단. 주어진 값의 범위는 10의 9승.    
따라서, 우선순위 큐 필요.

간단하게 `sort()` 를 이용한 우선순위 큐 구현.  
당연하게 시간 초과로 실패.

```ts
function minOperations(nums: number[], k: number): number {
  const pq = new SimplePQ();

  nums.forEach((num) => {
    pq.enqueue(num);
  });

  let count = 0;

  while (pq.min() < k) {
    const x = pq.dequeue();
    const y = pq.dequeue();

    const next = Math.min(x, y) * 2 + Math.max(x, y);

    pq.enqueue(next);

    count++;
  }

  return count;
}

class SimplePQ {
  private values;

  constructor() {
    this.values = [];
  }

  enqueue(val) {
    this.values.push(val);
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a - b);
  }

  min() {
    return this.values[0];
  }
}
```

## 2차 (성공, +44min)

직접 최소 힙 구현. 그 외 로직은 동일.

> 최소 힙 너무 오랜만에 구현해봤다.  

약 150ms

```ts
function minOperations(nums: number[], k: number): number {
  const mh = new MinHeap()

  nums.forEach(num => {
    mh.push(num)
  })

  let count = 0

  while (mh.min() < k) {
    const x = mh.pop()
    const y = mh.pop()

    const next = Math.min(x, y) * 2 + Math.max(x, y)

    mh.push(next)

    count++
  }

  return count
};

class MinHeap {
  heap

  constructor() {
    this.heap = [];
  }

  min() {
    return this.heap[0]
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) {
        return null;
    }

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
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
```

