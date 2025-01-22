function highestPeak(isWater: number[][]): number[][] {
  const m = isWater.length;
  const n = isWater[0].length;

  let queue: number[][] = [];
  const answer = new Array(m).fill(0).map((_) => new Array(n).fill(-1));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j]) {
        answer[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  const dirX = [-1, 0, 1, 0];
  const dirY = [0, 1, 0, -1];

  while (queue.length) {
    const tempQueue: number[][] = [];

    for (const [x, y] of queue) {
      const currentValue = answer[x][y];

      for (let d = 0; d < 4; d++) {
        const nextX = x + dirX[d];
        const nextY = y + dirY[d];

        if (nextX >= m || nextX < 0 || nextY >= n || nextY < 0) {
          continue;
        }

        if (answer[nextX][nextY] !== -1) {
          continue;
        }

        answer[nextX][nextY] = currentValue + 1;
        tempQueue.push([nextX, nextY]);
      }
    }

    queue = tempQueue;
  }

  return answer;
}
