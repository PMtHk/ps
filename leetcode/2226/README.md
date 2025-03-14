# 2226. Maximum Candies Allocated to K Children

> 면접을 이유로 거의 일주일간 안풀었다.
> 꾸준히 풀자!!

주어진 사탕 정보로, `k` 개의 사탕 묶음을 만들 때, 사탕 묶음의 최대 크기를 찾는 문제

## 1차 (성공, 16min)

n 크기로 나눌 수 있는지를 판단하는 함수와  
이분 탐색으로 해결

약 33ms

```ts
function maximumCandies(candies: number[], k: number): number {
  function canDivide(n: number) {
    let count = 0;

    for (let pile of candies) {
      count += Math.floor(pile / n);

      if (count >= k) {
        return true;
      }
    }

    return false;
  }

  let left = 1;
  let right = Math.max(...candies);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canDivide(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
}
```
