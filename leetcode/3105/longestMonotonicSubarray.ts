function longestMonotonicSubarray(nums: number[]): number {
  const n = nums.length;

  let increase = 1;
  let decrease = 1;

  let max = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      increase += 1;
      decrease = 1;
    } else if (nums[i - 1] > nums[i]) {
      increase = 1;
      decrease += 1;
    } else {
      increase = 1;
      decrease = 1;
    }

    max = Math.max(max, increase, decrease);
  }

  return max;
}
