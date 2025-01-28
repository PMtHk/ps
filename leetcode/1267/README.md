# 1267. Count Servers that Communicate

## 1차 (성공)

rows 로 1회, columns 로 1회 조건에 맞는 서버 수 계산
중복 제거

약 15ms

```ts
function countServers(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const rows: number[] = [];
  const cols: number[] = [];

  let answer = 0;

  for (let i = 0; i < m; i++) {
    const row = grid[i];
    const count = row.filter(Boolean).length;

    if (count > 1) {
      answer += count;
      rows.push(i);
    }
  }

  for (let j = 0; j < n; j++) {
    const col = grid.map((row) => row[j]);
    const count = col.filter(Boolean).length;

    if (count > 1) {
      answer += count;
      cols.push(j);
    }
  }

  for (let k = 0; k < rows.length; k++) {
    for (let l = 0; l < cols.length; l++) {
      if (grid[rows[k]][cols[l]]) {
        answer--;
      }
    }
  }

  return answer;
}
```

## 2차 (성공)

성능을 위해 로직 수정
- 별도의 방문 처리 제거
- rows 및 cols 별 카운트 측정
- 모든 위치를 순회하며 앞의 row 별, col 별 수를 기반으로 카운트 계산

약 6ms

```ts
function countServers(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const rowCount = new Array(m).fill(0);
  const colCount = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowCount[i]++;
        colCount[j]++;
      }
    }
  }

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
        count++;
      }
    }
  }

  return count;
}
```