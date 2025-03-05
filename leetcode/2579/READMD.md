# 2579. Count Total Number of Colored Cells

규칙에 따라 수를 세는 문제

## 1차 (성공, 6min)

단순하게 for문을 돌며 합을 더하는 방식  
다른 풀이들에 비해 많이 느렸다.

약 5ms 

```ts
function coloredCells(n: number): number {
  let sum = 1;

  for (let i = 1; i < n; i++) {
    sum += 4 * i;
  }

  return sum;
}
```

## 2차 (성공, +5min)

for문 순회가 아닌 규칙을 찾아서 계산하는 방식으로 개선

약 0ms

```ts
function coloredCells(n: number): number {
  return 2 * n ** 2 - 2 * n + 1;
}
```
