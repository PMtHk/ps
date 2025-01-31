# 827, Making A Large Island

단 한번의 변경(0 을 1로)을 통해 island(1들의 묶음)의 크기를 최대로 가지게 만들기

## 1차 (실패 - 시간 초과, 18min)

모든 위치를 순차적으로 돌며

- 현재 값이 1이면, 최대 사이즈 계산
- 현재 값이 0이면,
  - 0을 1로 변환하기
  - 최대 사이즈 계산

결국 O(N^4) 의 시간복잡도를 가지게 되어서, 시간 초과

```ts
function largestIsland(grid: number[][]): number {
  const n: number = grid.length;

  const dir = [-1, 0, 1, 0, -1];

  let answer = 0;

  const findOnes = (r, c, visited) => {
    if (visited[r][c]) {
      return 0;
    }

    let sum = 1;
    visited[r][c] = true;

    for (let i = 0; i < 4; i++) {
      const [nextR, nextC] = [r + dir[i], c + dir[i + 1]];

      if (
        nextR >= 0 &&
        nextR < n &&
        nextC >= 0 &&
        nextC < n &&
        !visited[nextR][nextC] &&
        grid[nextR][nextC] === 1
      ) {
        sum += findOnes(nextR, nextC, visited);
      }
    }

    return sum;
  };

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      let flag = false;

      if (grid[r][c] === 0) {
        grid[r][c] = 1;
        flag = true;
      }

      const visited: boolean[][] = new Array(n)
        .fill(0)
        .map((_) => new Array(n).fill(false));

      const size = findOnes(r, c, visited);

      if (size > answer) {
        answer = size;
      }

      if (flag) {
        grid[r][c] = 0;
      }
    }
  }

  return answer;
}
```

## 2차 (성공 - 힌트 참조, +42min)

최초로 순회하면서, 섬의 크기를 ID 와 맵핑해서 기록해두기  
이후에는 0을 순회하며, 인접한 섬들이 있는지 파악한 후 합 구하기

약 105ms

```ts
function largestIsland(grid: number[][]): number {
  const n = grid.length;
  const dir = [-1, 0, 1, 0, -1];
  const islandSizes: { [key: number]: number } = {};
  let answer = 0;
  let islandId = 2;

  const findSize = (r: number, c: number, id: number): number => {
    if (grid[r][c] === 0) {
      return 0;
    }

    grid[r][c] = id;
    let size = 1;

    for (let d = 0; d < 4; d++) {
      const [nextR, nextC] = [r + dir[d], c + dir[d + 1]];

      if (
        nextR >= 0 &&
        nextR < n &&
        nextC >= 0 &&
        nextC < n &&
        grid[nextR][nextC] === 1
      ) {
        size += findSize(nextR, nextC, id);
      }
    }

    return size;
  };

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        const size = findSize(r, c, islandId);
        islandSizes[islandId++] = size;
      }
    }
  }

  answer = Math.max(...Object.values(islandSizes));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0) {
        const connected = new Set<number>();
        let size = 1;

        for (let d = 0; d < 4; d++) {
          const [nextR, nextC] = [r + dir[d], c + dir[d + 1]];

          if (
            nextR >= 0 &&
            nextR < n &&
            nextC >= 0 &&
            nextC < n &&
            grid[nextR][nextC] !== 0
          ) {
            connected.add(grid[nextR][nextC]);
          }
        }

        for (const id of connected) {
          size += islandSizes[id];
        }

        answer = Math.max(answer, size);
      }
    }
  }

  return answer;
}
```