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
