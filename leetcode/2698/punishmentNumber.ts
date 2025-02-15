function punishmentNumber(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (isPunishment(i * i, i)) {
      sum += i * i;
    }
  }

  return sum;
}

function isPunishment(left: number, target: number): boolean {
  if (left === target) {
    return true;
  }

  if (target < 0 || left < target) {
    return false;
  }

  return [10, 100, 1000].some((div) => {
    const newLeft = Math.floor(left / div);
    const newTarget = target - (left % div);

    return isPunishment(newLeft, newTarget);
  });
}
