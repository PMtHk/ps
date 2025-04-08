# 3396. Minimum Number of Operations to Make Elements in Array Distinct

## 1차 (성공, 20min)

성공했지만, target 위치를 +1 하는 부분에서 많이 틀렸다.  
전체를 사용할 수 있는 예외 및 전체 다 사용할 수 없는 예외를 잘 신경써야 했다.  

약 2ms

```ts
function minimumOperations(nums: number[]): number {
  const len = nums.length;
  const numSet = new Set();

  let target = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (numSet.has(nums[i])) {
      target = i + 1;
      break;
    }

    numSet.add(nums[i]);
    target = i;
  }

  return Math.ceil(target / 3);
}
```