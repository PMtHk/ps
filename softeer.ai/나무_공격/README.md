# 나무 공격

> 소프티어 오랜만이다. 입력받는 것을 떠올리는데 오래걸렸다.

## 1차 (실패, 11min) 

입력 값 검증 부분에서 실패했다.  
타입을 잘 보자.

## 2차 (성공, +2min)

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input.shift().split(" ").map(Number);
  const rawGrid = input.slice(0, n);
  const grid = rawGrid.map((row) => row.split(" ").map(Number));

  const [rawFirst, rawSecond] = input.slice(-2);
  const first = rawFirst.split(" ").map(Number);
  const second = rawSecond.split(" ").map(Number);

  console.log(solution(n, m, grid, [first, second]));

  process.exit();
});

function solution(n, m, grid, attack) {
  const lefts = grid.map((row) => {
    return row.filter(Boolean).length;
  });

  attack.forEach(([L, R]) => {
    for (let i = L - 1; i < R; i++) {
      lefts[i] = lefts[i] > 0 ? lefts[i] - 1 : lefts[i];
    }
  });

  return lefts.reduce((sum, current) => {
    return sum + current;
  }, 0);
}
```


