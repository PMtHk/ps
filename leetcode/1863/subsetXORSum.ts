function subsetXORSum(nums: number[]): number {
  const n = nums.length;
  const subsets = [];
  let result = 0;

  const dfs = (start = 0, arr = []) => {
    subsets.push(arr);

    if (arr.length === n) {
      return;
    }

    for (let i = start; i < n; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  };

  dfs();

  const xor = (arr: number[]) => {
    return arr.reduce((acc, cur) => acc ^ cur, 0);
  };

  subsets.forEach((arr) => (result += xor(arr)));

  return result;
}
