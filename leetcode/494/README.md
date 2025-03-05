# 494. Target Sum

주어진 배열을 차례로 더하거나 빼 `target`을 만드는 경우의 수를 찾는 문제

## 1차 (성공, 5min)

단순 DFS를 통해 모든 가능한 경우 찾기

약 1704ms

```ts
function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length;
  let count = 0;

  const DFS = (sum, index) => {
    if (index === n) {
      if (sum === target) {
        count += 1;
      }
      return;
    }

    DFS(sum - nums[index], index + 1);
    DFS(sum + nums[index], index + 1);
  };

  DFS(0, 0);

  return count;
}
```

## 2차 (성공, + 17min)

1차 시도에 너무 느려서, Memoizaion 추가

약 101ms

```ts
function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length;
  const memo = new Map<string, number>();

  const DFS = (i, total) => {
    const key = `${i}-${total}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    if (i === n) {
      return total === target ? 1 : 0;
    }

    const result = DFS(i + 1, total + nums[i]) + DFS(i + 1, total - nums[i]);
    memo.set(key, result);

    return result;
  };

  const result = DFS(0, 0);
  return result;
}

```