# 416. Partition Equal Subset Sum

주어진 배열을 두 개의 합이 같은 부분집합으로 나눌 수 있는지를 판별하는 문제

## 1차 (실패, 17min)

제한 조건이 까다롭지 않다고 생각하고,  
모든 집합을 구해서 시도했고, 시간 초과를 만났다.  

```ts
function canPartition(nums: number[]): boolean {
  const total = nums.reduce((sum, num) => sum + num, 0)
  if (total % 2 !== 0) {
    return false
  }

  const target = total / 2;
  let found = false

  function backtrack(index: number, currentSum: number): void {
    if (found) return

    if (currentSum === target) {
      found = true
      return
    }

    if (index >= nums.length || currentSum > target) {
      return
    }

    backtrack(index + 1, currentSum + nums[index])
    backtrack(index + 1, currentSum)
  }

  backtrack(0, 0)
  return found;
}
```

## 2차 (성공, +23min)

더 나은 풀이가 생각나지 않아 풀이를 참고했다.  
DP로 접근하는 방법이었다.

어떤 부분집합의 합을 만들어 낼 수 있는지를 기록하고,  
도달 할 수 있는지를 판단하면 된다.

(이해하는데 꽤 시간이 걸렸다.)

```ts
function canPartition(nums: number[]): boolean {
  const totalSum = nums.reduce((sum, num) => sum + num, 0)

  if (totalSum % 2 !== 0) return false

  const target = totalSum / 2
  const reachableSums = Array(target + 1).fill(false)
  reachableSums[0] = true

  for (const num of nums) {
    for (let sum = target; sum >= num; sum--) {
      if (reachableSums[sum - num]) {
        reachableSums[sum] = true
      }
    }

    if (reachableSums[target]) return true
  }

  return reachableSums[target]
}
```