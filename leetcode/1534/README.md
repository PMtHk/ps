# 1534. Count Good Triplets

간단한 구현 계산 식 구현 문제

## 1차 (성공, 5min)

```ts
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }

  return count;
}
```