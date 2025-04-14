function canChange(start: string, target: string): boolean {
  const n = start.length;

  const LStart: number[] = [];
  const LTarget: number[] = [];

  const RStart: number[] = [];
  const RTarget: number[] = [];

  const s = start.replaceAll("_", "");
  const t = target.replaceAll("_", "");

  if (s !== t) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (start[i] === "L") LStart.push(i);
    if (start[i] === "R") RStart.push(i);
    if (target[i] === "L") LTarget.push(i);
    if (target[i] === "R") RTarget.push(i);
  }

  for (let i = 0; i < LStart.length; i++) {
    if (LStart[i] < LTarget[i]) return false;
  }

  for (let i = RStart.length - 1; i > -1; i--) {
    if (RStart[i] > RTarget[i]) return false;
  }

  return true;
}
