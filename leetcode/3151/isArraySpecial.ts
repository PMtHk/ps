function isArraySpecial(nums: number[]): boolean {
  const n = nums.length

  for (let i = 0; i < n - 1; i++) {
    if ((nums[i] + nums[i + 1]) % 2 === 0) {
      return false
    }
  }

  return true
};