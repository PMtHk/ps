function mostProfitablePath(
  edges: number[][],
  bob: number,
  amount: number[]
): number {
  const n = amount.length;
  const infos: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([from, to]) => {
    infos[from].push(to);
    infos[to].push(from);
  });

  const bobVisitTime = Array(n).fill(10_000_000);

  const bobDFS = (current: number, parent: number, time: number): boolean => {
    if (current === 0) {
      bobVisitTime[current] = time;
      return true;
    }

    for (const next of infos[current]) {
      if (next === parent) continue;

      if (bobDFS(next, current, time + 1)) {
        bobVisitTime[current] = time;
        return true;
      }
    }

    return false;
  };

  bobDFS(bob, -1, 0);

  const AliceDFS = (current: number, parent: number, time: number) => {
    let value = amount[current];
    if (time === bobVisitTime[current]) value = value / 2;
    if (time > bobVisitTime[current]) value = 0;

    let max = -10_000_000;
    let isLeaf = true;

    for (const next of infos[current]) {
      if (next === parent) continue;

      isLeaf = false;
      max = Math.max(max, AliceDFS(next, current, time + 1));
    }

    return isLeaf ? value : value + max;
  };

  return AliceDFS(0, -1, 0);
}
