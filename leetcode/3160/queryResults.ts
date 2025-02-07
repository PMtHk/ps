function queryResults(limit: number, queries: number[][]): number[] {
  const colorsMap = new Map<number, number>();
  const ballsMap = new Map<number, number>();

  return queries.map(([ball, color]) => {
    const ballColor = ballsMap.get(ball);

    if (ballColor !== undefined) {
      const newCount = colorsMap.get(ballColor)! - 1;
      if (newCount === 0) {
        colorsMap.delete(ballColor);
      } else {
        colorsMap.set(ballColor, newCount);
      }
    }

    ballsMap.set(ball, color);

    colorsMap.set(color, (colorsMap.get(color) || 0) + 1);

    return colorsMap.size;
  });
}
