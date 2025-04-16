function countGood(nums: number[], k: number): number {
  const n = nums.length;
  const map = new Map<number, number>();

  let left = 0;
  let pairCount = 0;
  let result = 0;

  for (let right = 0; right < n; right++) {
    const count = map.get(nums[right]) || 0;

    pairCount += count;
    map.set(nums[right], count + 1);

    while (pairCount >= k) {
      const leftCount = map.get(nums[left]);

      result += n - right;
      pairCount -= leftCount - 1;
      map.set(nums[left], leftCount - 1);

      left++;
    }
  }

  return result;
}
