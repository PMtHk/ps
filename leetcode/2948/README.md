# 2948. Make Lexicograhpically Smallest Array by Swapping Elements

- 사전식 순서로 정렬하는 문제
- 정렬 가능 조건이 있음 (두 수의 차이가 `limit` 이하)

## 1차 (성공, 43min)

오름 차순으로 정렬되어 있다면,  
연속된 두 수의 차이가 `limit` 이하라면, 하나의 그룹으로 묶어서 정렬을 시도할 수 있음

주어진 위치를 기록하고 (index 배열)  
한 그룹 내 위치(index)와 그 숫자 값(nums)을 차례로 매칭.

```ts
function lexicographicallySmallestArray(
  nums: number[],
  limit: number
): number[] {
  const n: number = nums.length;
  const index: number[] = Array.from({ length: n }, (_, i) => i);

  index.sort((i, j) => nums[i] - nums[j]);

  const answer: number[] = Array(n).fill(0);

  for (let i = 0; i < n; ) {
    let j = i + 1;

    while (j < n && nums[index[j]] - nums[index[j - 1]] <= limit) {
      j++;
    }

    const temp: number[] = index.slice(i, j).sort((a, b) => a - b);

    for (let k: number = i; k < j; k++) {
      answer[temp[k - i]] = nums[index[k]];
    }

    i = j;
  }

  return answer;
}
```

