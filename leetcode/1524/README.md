# 1524. Number of Sub-arrays With Odd Sum

주어진 배열의 부분집합 중, 그 합이 홀수인 부분집합의 수를 구하는 문제

> 모든 연속된 부분집합. 말은 없지만, 그렇게 접근해야 한다.  
> 내가 놓쳤나?

## 1차 (실패, 28min)

정말 단순하게, 부분집합을 만들고, 직접 합을 구한 후 그 수를 계산했다.  
시간초과로 실패했다. 

66 / 151

```ts
function numOfSubarrays(arr: number[]): number {
  const mod = 1e9 + 7;
  const subarrays: number[][] = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const sub = arr.slice(i, j + 1);
      const sum = sub.reduce((acc, num) => acc + num, 0);

      subarrays.push([sum, ...sub]);
    }
  }

  let count = 0;

  for (const sub of subarrays) {
    if (sub[0] % 2 !== 0) {
      count = (count + 1) % mod;
    }
  }

  return count;
}
```


## 2차 (실패, +30min)

누적합을 사용하면, 매번 부분집합을 구하지 않더라도 투 포인터 처럼 사용할 수 있다.  
그래도 시간초과가 발생한다.  

139 / 151

```ts
function numOfSubarrays(arr: number[]): number {
  const n = arr.length;
  const 누적합: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    누적합[i + 1] = 누적합[i] + arr[i];
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const subSum = 누적합[j + 1] - 누적합[i];
      if (subSum % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
}
```

## 3차 (성공, +62min)

여러 풀이를 보고, 드디어 이해했다.

누적합의 홀수/짝수만 추적한다.  
현재까지 알고 있는 홀수 누적합, 짝수 누적합의 수를 기록한다.  
현재 누적합과 반대되는 이전 누적합의 수를 더해서 카운팅한다.

약 7ms

```ts
function numOfSubarrays(arr: number[]): number {
  const MOD = 1e9 + 7;
  let even = 1;
  let odd = 0;
  let prevSum = 0; // 0 짝수, 1 홀수
  let count = 0;

  for (const num of arr) {
    prevSum = (prevSum + num) % 2;

    if (prevSum === 0) {
      count = (count + odd) % MOD;
      even++;
    } else {
      count = (count + even) % MOD;
      odd++;
    }
  }

  return count;
}
```
