# 2326. Sprial Matrix IV

주어진 `ListNode` 를 `m * n` 사이즈의 2차원 배열로 나선형으로 배치하기

## 1차 (성공, 17min)

2차원 배열을 생성해두고, 방향 그리고 이미 점유되었는지 를 기준으로 배치

약 47ms

```ts
function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const matrix: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));

  const dirs = [0, 1, 0, -1, 0];

  let x = 0,
    y = 0,
    dir = 0;
  let current = head;

  while (current) {
    matrix[x][y] = current.val;
    current = current.next;

    let nextX = x + dirs[dir];
    let nextY = y + dirs[dir + 1];

    if (
      nextX < 0 ||
      nextX >= m ||
      nextY < 0 ||
      nextY >= n ||
      matrix[nextX][nextY] !== -1
    ) {
      dir = (dir + 1) % 4;
      nextX = x + dirs[dir];
      nextY = y + dirs[dir + 1];
    }

    x = nextX;
    y = nextY;
  }

  return matrix;
}
```