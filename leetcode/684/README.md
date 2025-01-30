# 684. Redundant Connectoin

이미 트리 구조에 연결된 새로운 `edge` 는 제거하는 문제

## 1차 (실패, 42min)

- 하나의 간선 정보가 주어질 때, 출발 도착 노드가 모두 등장했다면 제거하도록 구현
  - 여러 트리 구조가 연결되지 않았을 때 문제가 됨

## 2차 (성공, +28min)

- DFS 를 통해, 이미 나온 트리 구조를 통해 from 에서 to 로 갈 수 있다면 반환
- 다른 답안들은 대부분 Union Find 알고리즘을 사용

> Union Find 알고리즘 공부할 것!

약 14ms

```ts
function findRedundantConnection(edges: number[][]): number[] {
  const nodeMap = new Map<number, number[]>();

  const DFS = (node: number, target: number, visited: Set<number>): boolean => {
    if (node === target) {
      return true;
    }

    visited.add(node);

    for (const neighbor of nodeMap.get(node)) {
      if (!visited.has(neighbor) && DFS(neighbor, target, visited)) {
        return true;
      }
    }
    return false;
  };

  for (const [u, v] of edges) {
    if (!nodeMap.has(u)) {
      nodeMap.set(u, []);
    }

    if (!nodeMap.has(v)) {
      nodeMap.set(v, []);
    }

    const visited = new Set<number>();

    if (DFS(u, v, visited)) {
      return [u, v];
    }

    nodeMap.get(u).push(v);
    nodeMap.get(v).push(u);
  }

  return [];
}

```