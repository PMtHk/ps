# 2560. House Robber IV

도둑이 가지는 이득을 최소로 가질 때의 그 이득을 구하기

## 1차 (실패, 15min)

DFS를 사용해서 풀이시도  
시간초과로 실패  
여러 종료 조건을 사용해 최대한으로 줄여봐도 실패

```ts
function minCapability(nums: number[], k: number): number {
  let ans = Infinity;

  function DFS(i: number, count: number, currentMax: number, prevRobbed: boolean): void {
    if (count + (nums.length - i) < k) return;

    if (i === nums.length) {
      if (count >= k) {
        ans = Math.min(ans, currentMax);
      }
      return;
    }

    if (currentMax >= ans) return;

    dfs(i + 1, count, currentMax, false);

    if (!prevRobbed) {
      dfs(i + 1, count + 1, Math.max(currentMax, nums[i]), true);
    }
  }

  DFS(0, 0, 0, false);

  return ans;
}
```

## 2차 (성공, +34min)

이분 탐색으로 시도

약 20ms

```ts
function minCapability(nums: number[], k: number): number {
  let left = Math.min(...nums);
  let right = Math.max(...nums);

  const canRob = (capability: number): boolean => {
    let count = 0;
    let i = 0;

    while (i < nums.length) {
      if (nums[i] <= capability) {
        count++;
        i += 2;
      } else {
        i += 1;
      }
    }

    return count >= k;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canRob(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
```