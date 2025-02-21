# 2375. Contruct Smallest Bumber From DI String

 주어진 문자열을 기준으로 오름차순, 내림차순을 만족하는 문자열 만들기

## 1차 (실패, 35min)

백트래킹으로 접근해봤는데, 생각보다 복잡해서 풀어내지 못했다.

## 2차 (성공, +10min)

스택을 활용해 단순하게 풀수 있다.

약 1ms 

```ts
function smallestNumber(pattern: string): string {
  const result: number[] = [];
  const stack: number[] = [];

  for (let i = 1; i <= pattern.length + 1; i++) {
    stack.push(i);

    if (pattern[i - 1] === "I") {
      while (stack.length) {
        result.push(stack.pop());
      }
    }
  }

  while (stack.length) {
    result.push(stack.pop());
  }

  return result.join("");
}
```