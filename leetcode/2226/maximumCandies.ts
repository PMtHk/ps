function maximumCandies(candies: number[], k: number): number {
  function canDivide(n: number) {
    let count = 0;

    for (let pile of candies) {
      count += Math.floor(pile / n);

      if (count >= k) {
        return true;
      }
    }

    return false;
  }

  let left = 1;
  let right = Math.max(...candies);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canDivide(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
}
