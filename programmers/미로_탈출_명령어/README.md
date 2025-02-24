# 미로 탈출 명령어

`n` x `m` 격자 내에서 `x, y` 에서 `r, c` 로 이동하는 경로 중
`k` 번 이동해 탈출할 수 있고, 사전순으로 가장 빠른 경로

## 1차 (성공, 23min)

네 방향으로 이동할 수 있다. `d, l, r, u`, 사전순.  
DFS, 백트래킹으로 접근

31개의 테스트케이스 중 마지막 31번을 한동안 못찾았다. (시간초과)  
이는, `k` 번 이동해 도달할 수 있는지를 먼저 검증해야 하는 것 이었다.

따라서, 아래 부분을 추가해야 했다.

```js
const DIFF = k - (Math.abs(x - r) + Math.abs(y - c));
if (DIFF % 2 !== 0) {
    return "impossible";
}
```

약 27ms, 31 / 31

```js
function solution(n, m, x, y, r, c, k) {
  const DIFF = k - (Math.abs(x - r) + Math.abs(y - c));
  if (DIFF % 2 !== 0) {
    return "impossible";
  }

  const MOVE = [
    [-1, 0, "u"],
    [0, 1, "r"],
    [0, -1, "l"],
    [1, 0, "d"],
  ];

  const stack = [[x, y, ""]];

  while (stack.length > 0) {
    const [curX, curY, path] = stack.pop();

    if (curX === r && curY === c && path.length === k) {
      return path;
    }

    if (path.length >= k) {
      continue;
    }

    const dist = Math.abs(curX - r) + Math.abs(curY - c);
    if (dist > k - path.length) {
      continue;
    }

    for (const [addX, addY, addPath] of MOVE) {
      const newX = curX + addX;
      const newY = curY + addY;

      if (newX <= 0 || newX > n || newY <= 0 || newY > m) {
        continue;
      }

      stack.push([newX, newY, path + addPath]);
    }
  }

  return "impossible";
}
```


