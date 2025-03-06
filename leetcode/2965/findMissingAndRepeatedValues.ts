function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length;
  const on: boolean[] = new Array(n ** 2 + 1).fill(false);
  on[0] = true;

  let doubled;

  grid.flat().map((elem) => {
    if (!on[elem]) {
      on[elem] = true;
    } else {
      doubled = elem;
    }
  });

  return [doubled, on.findIndex((elem) => !elem)];
}
