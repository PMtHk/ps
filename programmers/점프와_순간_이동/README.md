# 점프와 순간 이동

- K 만큼의 에너지를 소모해 K칸 점프
- 에너지 소모 없이 현재 위치의 2배에 해당하는 위치로 순간 이동

이 두 방법으로 N 칸을 이동하면서 에너지를 최소한으로 사용하는 문제

## 1차 (성공, 17min)

N 위치로 부터 2로 나누거나 1을 빼거나 하는 방식으로 0까지 이동

약 0ms, 28 / 28

```js
function solution(n) {
  let left = n;
  let usage = 0;

  while (left > 0) {
    if (left % 2 === 0) {
      left /= 2;
    } else {
      usage += 1;
      left -= 1;
      left /= 2;
    }
  }

  return usage;
}
```
