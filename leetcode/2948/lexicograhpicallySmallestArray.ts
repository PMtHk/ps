function lexicographicallySmallestArray(
  nums: number[],
  limit: number
): number[] {
  const n: number = nums.length;
  const index: number[] = Array.from({ length: n }, (_, i) => i);

  index.sort((i, j) => nums[i] - nums[j]);

  const answer: number[] = Array(n).fill(0);

  for (let i = 0; i < n; ) {
    let j = i + 1;

    while (j < n && nums[index[j]] - nums[index[j - 1]] <= limit) {
      j++;
    }

    const temp: number[] = index.slice(i, j).sort((a, b) => a - b);

    for (let k: number = i; k < j; k++) {
      answer[temp[k - i]] = nums[index[k]];
    }

    i = j;
  }

  return answer;
}
