# 802. Find Eventual Safe States

- 단방향 그래프
- 0-indexed
- 2차원

outgoing 이 없다면 terminal  
모든 경로가 terminal 로 간다면 safe

## 1차 (성공, 14min)

문제에서 주어지는 ingoing 정보를 outgoing 정보로 바꾼 후,   
terminal node 부터 차례로 순회하며 찾기

약 1000ms

```ts
function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;

  const answer: Set<number> = new Set();
  const queue: number[] = [];

  const ingoing: number[][] = new Array(n).fill(0).map((_) => new Array());
  graph.forEach((arr, index) => {
    if (arr.length === 0) {
      answer.add(index);
    }

    arr.forEach((dest) => {
      ingoing[dest].push(index);
    });
  });

  Array.from(answer).forEach((elem) => {
    queue.push(...ingoing[elem]);
  });

  while (queue.length) {
    const next = queue.pop();

    if (graph[next].every((elem) => answer.has(elem))) {
      answer.add(next);
      queue.push(...ingoing[next]);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}
```

## 2차 (성공, +7min)

성능 개선을 하기 위해 불필요한 순회 줄이기 시도  
**DFS 방식으로 변경**

1. node 를 기준으로 outgoing 이 없다면 safe  
2. 모든 outgoing 이 safe 라면 safe

한 node 에서 DFS 진행 후, 하위 모든 node 가 safe 인지 판별

약 40ms

```ts
function eventualSafeNodes(graph: number[][]): number[] {
  const visited: Set<number> = new Set();
  const safeTerminal: Set<number> = new Set();

  const DFS = (node: number) => {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);

    if (!graph[node].length) {
      safeTerminal.add(node);
      return;
    }

    const isSafe = graph[node].every((node) => {
      DFS(node);
      return safeTerminal.has(node);
    });

    if (isSafe) {
      safeTerminal.add(node);
    }
  };

  graph.forEach((_, index) => {
    if (visited.has(index)) {
      return;
    }

    DFS(index);
  });

  return Array.from(safeTerminal).sort((a, b) => a - b);
}
```