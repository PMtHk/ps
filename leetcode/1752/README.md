# 1752. Check if Array Is Sorted and Rotated

배열이 오름차순 정렬되어 있고, 회전 (한번 혹은 0번 감소)만 되어 있는지 판단하는 문제

> An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.
>
> 회전에 대해 이렇게 적혀있다.  
> 알아두면 좋은 규칙인 것 같다.


## 1차 (성공, 8min)

위의 회전된 배열인지 판별하는 규칙을 적용  
각 원소를 기준으로 `nums[i] > nums[(i + 1) % n]` 를 만족하는 지 확인

약 0ms

```ts
function check(nums: number[]): boolean {
  const n = nums.length;
  let decrease: number = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      decrease += 1;
    }
  }

  return decrease <= 1;
}
```