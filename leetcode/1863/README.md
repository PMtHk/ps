# 1863. Sum of All Subset XOR Totals

주어진 배열의 모든 부분집합을 구한 후, XOR 연산하기

## 1차 (성공, 17min)

약 12ms

```ts
function subsetXORSum(nums: number[]): number {
  const n = nums.length;
  const subsets = [];
  let result = 0;

  const dfs = (start = 0, arr = []) => {
    subsets.push(arr);

    if (arr.length === n) {
      return;
    }

    for (let i = start; i < n; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  };

  dfs();

  const xor = (arr: number[]) => {
    return arr.reduce((acc, cur) => acc ^ cur, 0);
  };

  subsets.forEach((arr) => (result += xor(arr)));

  return result;
}
```