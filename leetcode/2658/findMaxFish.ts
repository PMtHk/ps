function findMaxFish(grid: number[][]): number {
  const m: number = grid.length;
  const n: number = grid[0].length;

  const dirR: number[] = [-1, 0, 1, 0];
  const dirC: number[] = [0, 1, 0, -1];

  let maximum = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0) {
        continue;
      }

      const nextVisit: number[][] = [[r, c]];
      let sum: number = 0;

      while (nextVisit.length) {
        const [curR, curC] = nextVisit.pop();

        sum += grid[curR][curC];
        grid[curR][curC] = 0;

        for (let i = 0; i < 4; i++) {
          const nextR = curR + dirR[i];
          const nextC = curC + dirC[i];

          if (
            nextR >= 0 &&
            nextR < m &&
            nextC >= 0 &&
            nextC < n &&
            grid[nextR][nextC] > 0
          ) {
            nextVisit.push([nextR, nextC]);
          }
        }
      }

      maximum = Math.max(maximum, sum);
    }
  }

  return maximum;
}
