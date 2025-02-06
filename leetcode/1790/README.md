# 1790. Check if One String Swap Can Make Strings Equal

두 문자열이 최대 1번의 스왑(두 요소 바꾸기)을 통해 같아질 수 있는지 판별

## 1차 (성공, 9min)

약 0ms

```ts
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
```