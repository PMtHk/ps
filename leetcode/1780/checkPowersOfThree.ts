function checkPowersOfThree(n: number): boolean {
  const used: number[] = [];
  let left = n;
  let max = 0;

  do {
    max += 1;
  } while (3 ** (max + 1) <= n);

  for (let i = max; i >= 0; i--) {
    if (3 ** i > left) {
      continue;
    } else {
      left -= 3 ** i;
    }
  }

  return left === 0 ? true : false;
}
