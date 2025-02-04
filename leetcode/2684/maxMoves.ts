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
