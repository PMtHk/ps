# 763. Partition Labels

문자열을 여러 파티션으로 나누는데, 각 문자가 하나의 파티션에만 등장하도록 나누기.

## 1차 (성공, 19min)

1. 각 문자의 마지막 위치를 저장해두기
2. 투 포인터를 사용해 계산하기

약 3ms

```ts
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
```