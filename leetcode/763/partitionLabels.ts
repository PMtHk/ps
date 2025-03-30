function partitionLabels(s: string): number[] {
  const lastMap = new Map<string, number>();

  const chars = s.split("");

  chars.forEach((char, i) => {
    lastMap.set(char, i);
  });

  const result: number[] = [];

  let left = 0;
  let right = 0;

  chars.forEach((char, i) => {
    right = Math.max(right, lastMap.get(char));

    if (i === right) {
      result.push(i - left + 1);
      left = i + 1;
    }
  });

  return result;
}
