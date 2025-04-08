function minimumOperations(nums: number[]): number {
  const len = nums.length;
  const numSet = new Set();

  let target = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (numSet.has(nums[i])) {
      target = i + 1;
      break;
    }

    numSet.add(nums[i]);
    target = i;
  }

  return Math.ceil(target / 3);
}
