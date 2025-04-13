# 1922. Count Good Numbers

문제가 제시된 Good Numbers 의 개수를 찾는 문제이다.  
Good Numbers 의 기준은 다음과 같다.  

- 짝수 index에는 짝수가 위치한다
- 홀수 index에는 소수가 위치한다

`n`자리의 수를 기준으로 개수를 찾으면 된다.

## 1차 (실패, 11min)

단순히 for 문을 사용해 경우의 수를 곱해 나가려고 했지만, 실패했다.  
문제를 너무 쉽게 생각했다. 제한 조건은 `n`이 10의 15승까지였다.  

69 / 166 

```ts
function countGoodNumbers(n: number): number {
  const mod = 10 ** 9 + 7
  let count

  if (n % 2 === 0) {
    count = 4
  } else {
    count = 5
  }

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      count = (count * 5) % mod
    } else {
      count = (count * 4) % mod
    }
  }

  return count
};
```

## 2차 (성공, +30min)

결국 지수 연산의 수를 줄여야 했다.  
Exponentiation by Squaring 이라는 방법을 참조해서 풀었다.  
이를 사용하면, 선형적인 일반 지수 연산을, O(log n) 시간에 계산할 수 있게 된다.

약 5ms

```ts
function countGoodNumbers(n: number): number {
  const MOD = BigInt(1e9 + 7)

  const evenCount = Math.ceil(n / 2)
  const oddCount = Math.floor(n / 2)

  function powerMod(base: number, exponent: number): bigint {
    let result = BigInt(1)
    let bigBase = BigInt(base) % MOD
    let exp = BigInt(exponent)

    while (exp > 0n) {
      if (exp % 2n === 1n) {
        result = (result * bigBase) % MOD
      }

      bigBase = (bigBase * bigBase) % MOD
      exp = exp / 2n
    }

    return result
  }

  const even = powerMod(5, evenCount);
  const odd = powerMod(4, oddCount)

  return Number((even * odd) % MOD)
}
```