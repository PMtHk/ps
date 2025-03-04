function pivotArray(nums: number[], pivot: number): number[] {
  const n = nums.length;
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] < pivot) {
      result.push(nums[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] === pivot) {
      result.push(nums[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > pivot) {
      result.push(nums[i]);
    }
  }

  return result;
}
