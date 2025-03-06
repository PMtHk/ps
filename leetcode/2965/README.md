# 2965. Find Missing and Repeated Values

주어진 `n * n` 사이즈의 `grid`에서 1 부터 `n * n` 까지의 수 중  
누락된 수, 2번 나온 수를 찾는 문제

## 1차 (성공, 7min)

주어진 2차원 배열을 `flat()` 메소드를 사용해 1차원 배열로 만든 후 해결

약 4ms


```ts
function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length;
  const on: boolean[] = new Array(n ** 2 + 1).fill(false);
  on[0] = true;

  let doubled;

  grid.flat().map((elem) => {
    if (!on[elem]) {
      on[elem] = true;
    } else {
      doubled = elem;
    }
  });

  return [doubled, on.findIndex((elem) => !elem)];
}
```

