# 2684. Maximum Number of Moves in a Grid

첫 column 부터 시작해 가장 많이 이동할 수 있는 **횟수**  

## 1차 (실패, 25min)

풀이 방향은 메모이제이션으로 맞는 방향이었다.

하지만, 움직인 **횟수**를 구해야 하는데, 각 요소의 합을 구해서 메모이제이션도 합의 크기로 진행했다. 즉, 시간 낭비 했다.

## 2차 (성공, + 10min)

1차 풀이에서 움직인 횟수로 변경했다.

약 15ms

```ts
function maxMoves(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;
  const memo = Array.from({ length: row }, () => new Array(col).fill(-1));

  const recursive = (i: number, j: number): number => {
    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    if (j === col - 1) {
      memo[i][j] = 0;
      return 0;
    }

    let maxMove = 0;
    const val = grid[i][j];

    if (val < grid[i][j + 1]) {
      maxMove = Math.max(maxMove, recursive(i, j + 1) + 1);
    }

    if (i > 0 && val < grid[i - 1][j + 1]) {
      maxMove = Math.max(maxMove, recursive(i - 1, j + 1) + 1);
    }

    if (i < row - 1 && val < grid[i + 1][j + 1]) {
      maxMove = Math.max(maxMove, recursive(i + 1, j + 1) + 1);
    }

    memo[i][j] = maxMove;
    return memo[i][j];
  };

  let ans = 0;

  for (let i = 0; i < row; i++) {
    ans = Math.max(ans, recursive(i, 0));
  }

  return ans;
}
```

