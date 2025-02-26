function numOfSubarrays(arr: number[]): number {
  const MOD = 1e9 + 7;
  let even = 1;
  let odd = 0;
  let prevSum = 0; // 0 짝수, 1 홀수
  let count = 0;

  for (const num of arr) {
    prevSum = (prevSum + num) % 2;

    if (prevSum === 0) {
      count = (count + odd) % MOD;
      even++;
    } else {
      count = (count + even) % MOD;
      odd++;
    }
  }

  return count;
}
