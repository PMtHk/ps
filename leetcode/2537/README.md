# 2537. Count the Number of Good Subarrays

nums 배열에서 good pair 의 갯수가 k 개 이상인 배열의 수를 구하기

## 1차 (성공, 40min)

모든 부분집합이 아닌 투포인터를 활용해서 접근  
어느 순간 쌍이 k 가 이상이라면, 우측 포인터를 더 이상 늘릴 필요 없음 (항상 만족)  
따라서, 왼쪽 포인터를 늘리면서 k 개를 만족하지 않는 순간을 찾기

약 34ms

```ts
function countGood(nums: number[], k: number): number {
  const n = nums.length;
  const map = new Map<number, number>();

  let left = 0;
  let pairCount = 0;
  let result = 0;

  for (let right = 0; right < n; right++) {
    const count = map.get(nums[right]) || 0;

    pairCount += count;
    map.set(nums[right], count + 1);

    while (pairCount >= k) {
      const leftCount = map.get(nums[left]);

      result += n - right;
      pairCount -= leftCount - 1;
      map.set(nums[left], leftCount - 1);

      left++;
    }
  }

  return result;
}
```