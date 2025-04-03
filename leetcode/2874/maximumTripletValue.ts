function maximumTripletValue(nums: number[]): number {
  const len = nums.length;

  let leftMax = 0;
  let diff = 0;
  let max = 0;

  for (let i = 0; i < len; i++) {
    max = Math.max(max, diff * nums[i]);
    diff = Math.max(diff, leftMax - nums[i]);
    leftMax = Math.max(leftMax, nums[i]);
  }

  return max;
}
