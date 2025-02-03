/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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
