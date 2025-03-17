# 2206. Divide Array Into Equal Pairs

단순하게 풀 수 있는 문제였다.  
각 수가 짝수개인지만 판별하면 된다.

## 1차 (성공, 4min)

약 2ms

```ts
function divideArray(nums: number[]): boolean {
  const numFreq: number[] = new Array(501).fill(0);

  nums.forEach((num) => {
    numFreq[num] += 1;
  });

  if (numFreq.some((num) => num % 2 !== 0)) {
    return false;
  }

  return true;
}
```