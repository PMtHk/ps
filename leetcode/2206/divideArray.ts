function divideArray(nums: number[]): boolean {
  const numFreq: number[] = new Array(501).fill(0);

  nums.forEach((num) => {
    numFreq[num] += 1;
  });

  if (numFreq.some((num) => num % 2 !== 0)) {
    return false;
  }

  return true;
}
