function maxAscendingSum(nums: number[]): number {
  const n = nums.length;
  let max = nums[0];
  let temp = nums[0];

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      temp += nums[i];
    } else {
      max = Math.max(max, temp);
      temp = nums[i];
    }
  }

  return Math.max(max, temp);
}
