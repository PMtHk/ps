# 2874. Maximum Value of an Ordered Triplet II

2873 문제의 상위버전

## 1차 (성공, 18min)

기존 세번의 반복문을 풀어서 최대값을 찾는 구조를  
기록을 통해 한번의 for 문으로 개선

약 3ms

```ts
function maximumTripletValue(nums: number[]): number {
  const len = nums.length;

  let leftMax = 0;
  let diff = 0;
  let max = 0;

  for (let i = 0; i < len; i++) {
    max = Math.max(max, diff * nums[i]);
    diff = Math.max(diff, leftMax - nums[i]);
    leftMax = Math.max(leftMax, nums[i]);
  }

  return max;
}
```
