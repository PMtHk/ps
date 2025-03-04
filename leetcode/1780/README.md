# 1780. Check if Number is a Sum of Powers of Three

3의 `i`승의 합으로 만들 수 있는 수 인지 판별하는 문제  
(단, `i`은 중복될 수 없다.)

## 1차 (성공, 12min)

우선, `i`로 사용할 수 있는 최대 값을 구하고,  
`n` 에서 3의 `i` 승을 빼나가면서 0을 만들 수 있는지만 판별하면 된다.

약 0ms

```ts
function checkPowersOfThree(n: number): boolean {
  const used: number[] = [];
  let left = n;
  let max = 0;

  do {
    max += 1;
  } while (3 ** (max + 1) <= n);

  for (let i = max; i >= 0; i--) {
    if (3 ** i > left) {
      continue;
    } else {
      left -= 3 ** i;
    }
  }

  return left === 0 ? true : false;
}
```