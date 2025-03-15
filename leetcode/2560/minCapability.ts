function minCapability(nums: number[], k: number): number {
  let left = Math.min(...nums);
  let right = Math.max(...nums);

  const canRob = (capability: number): boolean => {
    let count = 0;
    let i = 0;

    while (i < nums.length) {
      if (nums[i] <= capability) {
        count++;
        i += 2;
      } else {
        i += 1;
      }
    }

    return count >= k;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canRob(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
