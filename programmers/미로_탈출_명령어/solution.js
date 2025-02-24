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
