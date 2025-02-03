# 3105. Longest Strictly Increasing or Strictly Decreasing Subarray

(같지 않고) 증가 혹은 감소가 유지되는 SubArray 의 최대 길이 찾기

## 1차 (성공, 8min)

increase, decrease 값을 기반으로 진행

약 2ms

```ts
function longestMonotonicSubarray(nums: number[]): number {
  const n = nums.length;

  let increase = 1;
  let decrease = 1;

  let max = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      increase += 1;
      decrease = 1;
    } else if (nums[i - 1] > nums[i]) {
      increase = 1;
      decrease += 1;
    } else {
      increase = 1;
      decrease = 1;
    }

    max = Math.max(max, increase, decrease);
  }

  return max;
}
```