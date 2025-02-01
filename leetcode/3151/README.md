# 3151. Special Array I

연속된 두 수가 항상 다른 패리티를 가지는 지(= 홀수 짝수로 다른 지) 판단하는 문제

## 1차 (성공, 3min)

0ms

```ts
function isArraySpecial(nums: number[]): boolean {
  const n = nums.length

  for (let i = 0; i < n - 1; i++) {
    if ((nums[i] + nums[i + 1]) % 2 === 0) {
      return false
    }
  }

  return true
};
```