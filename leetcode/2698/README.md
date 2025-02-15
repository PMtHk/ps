# 2698. Find the Punishment Number of an Integer

`n` 을 제곱한 수의 각 자릿수를 조합해 그 합이 `n` 되는 수를 찾기  
예를 들어, 36을 제곱하면 1296, 1 + 29 + 6 을 하면 36이 된다.

## 1차 (성공, 39min)

각 자릿수를 조합해 여러 조합을 만들고, 그 합이 `n` 이 되는 경우가 있는 지 찾기  
백트래킹 사용

약 581ms

```ts
function punishmentNumber(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (isPunishment(i)) {
      sum += i * i;
    }
  }

  return sum;
}

function isPunishment(num: number): boolean {
  const square = num * num;

  const elements: string[] = square.toString().split("");
  const len = elements.length;

  const subArrays: number[][] = [];

  function bt(index: number, path: number[]) {
    if (index === len) {
      subArrays.push([...path]);
      return;
    }

    for (let i = index; i < len; i++) {
      const newNum = parseInt(elements.slice(index, i + 1).join(""), 10);
      path.push(newNum);
      bt(i + 1, path);
      path.pop();
    }
  }

  bt(0, []);

  for (let i = 0; i < subArrays.length; i++) {
    if (subArrays[i].reduce((acc, cur) => acc + cur, 0) === num) {
      return true;
    }
  }

  return false;
}
```

## 2차 

1차에서 문제는 맞췄지만, 내 방식은 가장 느리게 푼 케이스 중 하나  
따라서, [Editorial](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/editorial/) 의 Recursion of Integers 를 이해해보고자 도전

위의 내 방식은 모든 가능성을 미리 조사하고 또 검증하는 방식  
새로운 방식은 바로 검증해보면서 종료하는 방식  

1296 은 36 이 아니니, 재귀적으로 쪼갠다. (나누는 것은 동일)  

1. 1296 을 10 으로 나누면 몫은 129 나머지는 6 
2. 이제, 129 를 쪼개서 나머지 30을 채울 수 있는 지 검증하면 됨.
3. 129 을 10으로 나눈 몫은 12, 나머지는 9
4. 12로 30 - 9 인 21 채우는 것은 불가능 종료
5. 129 를 100으로 나눈 몫은 1, 나머지는 29
6. 1 로 30 - 29 인 1 과 동일 가능하다는 결론

약 23ms

매우 빠른 속도다...

```ts
function punishmentNumber(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (isPunishment(i * i, i)) {
      sum += i * i;
    }
  }

  return sum;
}

function isPunishment(left: number, target: number): boolean {
  if (left === target) {
    return true;
  }

  if (target < 0 || left < target) {
    return false;
  }

  return [10, 100, 1000].some((div) => {
    const newLeft = Math.floor(left / div);
    const newTarget = target - (left % div);

    return isPunishment(newLeft, newTarget);
  });
}
```