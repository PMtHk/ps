function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const memo = new Array(n).fill(-1);

  const dfs = (index: number): number => {
    if (index >= n) return 0;
    if (memo[index] !== -1) return memo[index];

    const [points, brainpower] = questions[index];

    const solve = points + dfs(index + brainpower + 1);
    const skip = dfs(index + 1);

    memo[index] = Math.max(solve, skip);
    return memo[index];
  };

  return dfs(0);
}
