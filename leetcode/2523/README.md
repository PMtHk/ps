# 2523. Closest Prime Numbers in Range

주어진 범위 내에 차이가 가장 작은 두 소수를 구하기

## 1차 (성공, 10min)

단순하게 `2 ~ Math.sqrt(N)` 까지 나누는 방식을 사용해 답을 구했다.  
답은 맞췄지만, 다른 답안들에 비해 너무 느렸다.

약 1078ms

```ts
function closestPrimes(left: number, right: number): number[] {
  let minDiff = Infinity;
  let prevPrime: number = -Infinity;
  let answer: number[] = [];

  if (left === right) {
    return [-1, -1];
  }

  if (left <= 2 && right >= 3) {
    return [2, 3];
  }

  let start = left % 2 === 0 ? left + 1 : left;

  for (let i = start; i <= right; i += 2) {
    if (isPrime(i)) {
      if (minDiff > i - prevPrime) {
        answer = [prevPrime, i];
        minDiff = i - prevPrime;
      }

      prevPrime = i;
    }
  }

  return answer.length ? answer : [-1, -1];
}

function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```


## 2차 (성공, +37min)

개선하기 위해서는 ["에라토스테네세의 체"](https://namu.wiki/w/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98%20%EC%B2%B4)에 대해 이해하고 이를 적용하면 된다.  
처음보는 개념이라 조금 당황했지만, 잘 적용해서 시간을 줄일 수 있었다.

약 150ms

```ts
function closestPrimes(left: number, right: number): number[] {
  const isPrime: boolean[] = new Array(right + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= right; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= right; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let prevPrime = -1;
  let minDiff = Infinity;
  let answer: number[] = [-1, -1];

  for (let i = Math.max(left, 2); i <= right; i++) {
    if (isPrime[i]) {
      if (prevPrime !== -1 && i - prevPrime < minDiff) {
        minDiff = i - prevPrime;
        answer = [prevPrime, i];
      }
      prevPrime = i;
    }
  }

  return answer;
}
```