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
