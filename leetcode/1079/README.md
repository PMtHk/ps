# 1079. Letter Tile Possibilities

주어진 문자들로 만들 수 있는 모든 조합의 수를 구하는 문제  
(단, 빈문자열 제외)

## 1차 (성공, 21min)

백트래킹 사용

약 22ms

```ts
function numTilePossibilities(tiles: string): number {
  const chars = tiles.split("");
  const n = chars.length;
  const visited = new Array(n).fill(false);
  const set = new Set<string>();

  const dfs = (current: string) => {
    set.add(current);

    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }

      visited[i] = true;
      dfs(current + chars[i]);
      visited[i] = false;
    }
  };

  dfs("");

  return set.size - 1;
}
```