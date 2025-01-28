# 2568. Maximum Number of Fish in a Grid

구획별로의 최댓값 비교

## 1차 (성공, 21min)

각 시작점으로 부터, 다음 BFS 를 돌면서, 합을 구하고,  
최댓값만 추출하기

약 120ms

```ts
function findMaxFish(grid: number[][]): number {
  const m: number = grid.length
  const n: number = grid[0].length

  const visited: boolean[][] = new Array(m)
    .fill(false)
    .map(_ => new Array(n).fill(false))

  const dirR: number[] = [-1, 0, 1, 0]
  const dirC: number[] = [0, 1, 0, -1]

  let maximum = 0

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (visited[r][c] || grid[r][c] === 0) {
        continue
      }

      const nextVisit: number[][] = [[r, c]]
      let sum : number = 0

      while (nextVisit.length) {
        const [curR, curC] = nextVisit.pop()
        if (visited[curR][curC]) {
          continue
        }

        sum += grid[curR][curC]
        visited[curR][curC] = true

        for (let i = 0; i < 4; i++) {
          const nextR = curR + dirR[i]
          const nextC = curC + dirC[i]

          if (nextR >= 0 && nextR < m && nextC >= 0 && nextC < n && !visited[nextR][nextC] && grid[nextR][nextC] > 0) {
            nextVisit.push([nextR, nextC])
          }
        }
      }

      maximum = Math.max(maximum, sum)
    }
  }

  return maximum
}
```

## 2차 (성공, +3min)

1차 시도에서 사용한 `visited` 배열을 사용하는 대신  
기존 `grid` 배열의 숫자를 0으로 변경하는 방식 사용  
(이미 그룹화되어 계산된 값은 다시 사용하지 않음)

약 8ms

```ts
function findMaxFish(grid: number[][]): number {
  const m: number = grid.length
  const n: number = grid[0].length

  const dirR: number[] = [-1, 0, 1, 0]
  const dirC: number[] = [0, 1, 0, -1]

  let maximum = 0

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0) {
        continue
      }

      const nextVisit: number[][] = [[r, c]]
      let sum : number = 0

      while (nextVisit.length) {
        const [curR, curC] = nextVisit.pop()

        sum += grid[curR][curC]
        grid[curR][curC] = 0

        for (let i = 0; i < 4; i++) {
          const nextR = curR + dirR[i]
          const nextC = curC + dirC[i]

          if (nextR >= 0 && nextR < m && nextC >= 0 && nextC < n && grid[nextR][nextC] > 0) {
            nextVisit.push([nextR, nextC])
          }
        }
      }

      maximum = Math.max(maximum, sum)
    }
  }

  return maximum
}
```