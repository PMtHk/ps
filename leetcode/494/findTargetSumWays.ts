function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length;
  const memo = new Map<string, number>();

  const DFS = (i, total) => {
    const key = `${i}-${total}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    if (i === n) {
      return total === target ? 1 : 0;
    }

    const result = DFS(i + 1, total + nums[i]) + DFS(i + 1, total - nums[i]);
    memo.set(key, result);

    return result;
  };

  const result = DFS(0, 0);
  return result;
}
