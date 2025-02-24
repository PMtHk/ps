# 2467. Most Profitable Path in a Tree

> 문제 이해에 많은 시간이 필요했다.
> 나중에 다시 풀어보자.

Alice 는 leaf Node 를 향해, Bob 은 rootNode 로 향해 이동한다.  
목표는 Alice 의 점수가 가장 크도록 만드는 것이다.  

1. Alice 가 `i` node 에 방문하면, `amount[i]` 만큼의 리워드를 받게 된다.
2. 해당 노드에 Bob 과 동시에 도착했다면 정확히 반만큼 가져간다.
3. Bob 보다 늦게 도착한다면, 0점을 가져간다.

우선, Bob 은 0을 향해 최단거리로 접근한다.  
(문제에 그런말은 없지만 그런 것 같다.)

## 1차 (힌트 참조, 91min)

Bob 의 단일 경로를 미리 DFS 를 통해 구한다.  
단, 경로만 기록하는 것이 아닌, 경로에 도착한 시간을 기록해둔다.

Alice 의 경로, 그리고 점수를 구하는 DFS 를 구현한다.

- 노드에 도착했을 때 도착한 시간과 해당 노드에 Bob 이 도착한 시간을 비교해 받을 수 있는 점수를 계산한다.
- 다음 노드로 진행하면서 현재 노드가 leaf 노드인지 확인하는 로직과, leaf 노드가 아니라면 추가로 진행해 받을 수 있는 점수의 최대값을 구한다.
- 현 노드가 leaf 라면 해당 값을, 아니라면, 최댓값에 현 노드에서 받을 수 있는 점수의 합을 반환한다.

추가로, 처음에 같은 로직에 `infos` 를 Map을 사용해서 만들었더니 Map 내 배열을 계속 복사하는 과정에서 시간 초과가 발생했다.

약 250ms


```ts
function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
  const n = amount.length
  const infos: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([from, to]) => {
    infos[from].push(to);
    infos[to].push(from);
  });

  const bobVisitTime = Array(n).fill(10_000_000)

  const bobDFS = (current: number, parent: number, time: number): boolean => {
    if (current === 0) {
      bobVisitTime[current] = time;
      return true;
    }

    for (const next of infos[current]) {
      if (next === parent) continue;
      if (bobDFS(next, current, time + 1)) {
        bobVisitTime[current] = time;
        return true;
      }
    }

    return false;
  };

  bobDFS(bob, -1, 0);

  const AliceDFS = (current, parent, time) => {
    let value = amount[current]
    if (time === bobVisitTime[current]) value = value / 2
    if (time > bobVisitTime[current]) value = 0

    let max = -10_000_000
    let isLeaf = true;

    for (const next of infos[current]) {
      if (next === parent) continue

      isLeaf = false
      max = Math.max(max, AliceDFS(next, current, time + 1))
    }

    return isLeaf ? value : value + max
  }

  return AliceDFS(0, -1, 0)
};
```

