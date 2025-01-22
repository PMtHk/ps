# 1765. Map of Highest Peak

## 1차 (실패)

`queue` 배열을 `shift` 로 단순히 BFS 처럼 순회해서 모든 테케 통과 실패

```ts
while(queue.length) {
  const [x, y] = queue.shift()
  const currentValue = answer[x][y]

  for (let d = 0; d < 4; d++) {
    const nextX = x + dirX[d]
    const nextY = y + dirY[d]

    if (nextX >= m || nextX < 0 || nextY >= n || nextY < 0) {
      continue
    }

    if (answer[nextX][nextY] !== -1) {
      continue
    }

    answer[nextX][nextY] = currentValue + 1
    queue.push([nextX, nextY])
  }
}
```

## 2차 (성공)

단계별 순회하는 방식, `tempQueue` 를 만들어 `queue` 에 재할당 하는 방식으로 해결