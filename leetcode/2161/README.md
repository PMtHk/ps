# 2161. Partition Array According to Give Pivot

주어진 배열을 `pivot`을 기준으로 작은 것, `pivot`, 큰 것 순으로 나열하는 문제다.  
단, 기존 순서는 유지한 채 `pivot`을 기준으로 좌우 나누는 것이다.

> 문제는 간단했지만, 재미있는 문제였다.
> 간단한 for 문을 여러 개 작성하는 것이 분기 처리하는 하나의 for문 보다 빠르다는 것을 알았다. 

## 1차 (성공, 3min)

forEach 를 사용해 세 개의 배열로 구분 후 합치기

약 45ms

```ts
function pivotArray(nums: number[], pivot: number): number[] {
  const left: number[] = [];
  const right: number[] = [];
  const pivots: number[] = [];

  nums.forEach((num) => {
    if (num === pivot) {
      pivots.push(num);
    } else if (num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  });

  return [...left, ...pivots, ...right];
}
```

## 2차 (성공, +1min)

forEach를 for문으로 변경

약 28ms

## 3차 (성공, +4min)

for문과 스프레드를 통한 배열 합치는 로직을 없애고,  
하나의 배열에 3번의 for문으로 차례로 push 하도록

2차에서 스프레드를 for문을 통해 변경해도 큰 차이는 없었다.  
따라서, 여러 개의 단순한 for문이 분기 처리가 있는 하나의 for문 보다 빠른 것 같다.

약 8ms

```ts
function pivotArray(nums: number[], pivot: number): number[] {
  const n = nums.length;
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] < pivot) {
      result.push(nums[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] === pivot) {
      result.push(nums[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > pivot) {
      result.push(nums[i]);
    }
  }

  return result;
}
```

