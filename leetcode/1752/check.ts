function check(nums: number[]): boolean {
  const n = nums.length;
  let decrease: number = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      decrease += 1;
    }
  }

  return decrease <= 1;
}
