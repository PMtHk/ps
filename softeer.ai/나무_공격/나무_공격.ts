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
