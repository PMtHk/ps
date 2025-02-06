function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) {
    return true;
  }

  const n = s1.length;
  const diffs = [];

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      diffs.push(s1[i] + s2[i]);
    }
  }

  if (diffs.length === 2) {
    if (diffs[0][1] === diffs[1][0] && diffs[1][1] === diffs[0][0]) {
      return true;
    }
  }

  return false;
}
