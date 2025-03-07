function closestPrimes(left: number, right: number): number[] {
  const isPrime: boolean[] = new Array(right + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= right; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= right; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let prevPrime = -1;
  let minDiff = Infinity;
  let answer: number[] = [-1, -1];

  for (let i = Math.max(left, 2); i <= right; i++) {
    if (isPrime[i]) {
      if (prevPrime !== -1 && i - prevPrime < minDiff) {
        minDiff = i - prevPrime;
        answer = [prevPrime, i];
      }
      prevPrime = i;
    }
  }

  return answer;
}
