# 3160. Find the Number of Distinct Colors Among the Balls

차례로 주어지는 정보로  
해당 공에 색상을 칠하며, 서로 다른 색의 수를 단계별로 기록하는 문제.

`limit` 은 10^9, `queries` 는 10^5 이므로,  
단순한 이중 반복문으로 절대 안될 것 같은 느낌

## 1차 (성공, 22min)

두 개의 `Map` 을 사용해 
- 공의 색상 정보
- 색상 별 공의 개수

를 각각 기록한다.

약 41ms

```ts
function queryResults(limit: number, queries: number[][]): number[] {
  const colorsMap = new Map<number, number>();
  const ballsMap = new Map<number, number>();

  return queries.map(([ball, color]) => {
    const ballColor = ballsMap.get(ball);

    if (ballColor !== undefined) {
      const newCount = colorsMap.get(ballColor)! - 1;
      if (newCount === 0) {
        colorsMap.delete(ballColor);
      } else {
        colorsMap.set(ballColor, newCount);
      }
    }

    ballsMap.set(ball, color);

    colorsMap.set(color, (colorsMap.get(color) || 0) + 1);

    return colorsMap.size;
  });
}
```