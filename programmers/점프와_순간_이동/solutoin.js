function solution(n) {
  let left = n;
  let usage = 0;

  while (left > 0) {
    if (left % 2 === 0) {
      left /= 2;
    } else {
      usage += 1;
      left -= 1;
      left /= 2;
    }
  }

  return usage;
}
