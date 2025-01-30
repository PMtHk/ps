function findRedundantConnection(edges: number[][]): number[] {
  const nodeMap = new Map<number, number[]>();

  const DFS = (node: number, target: number, visited: Set<number>): boolean => {
    if (node === target) {
      return true;
    }

    visited.add(node);

    for (const neighbor of nodeMap.get(node)) {
      if (!visited.has(neighbor) && DFS(neighbor, target, visited)) {
        return true;
      }
    }
    return false;
  };

  for (const [u, v] of edges) {
    if (!nodeMap.has(u)) {
      nodeMap.set(u, []);
    }

    if (!nodeMap.has(v)) {
      nodeMap.set(v, []);
    }

    const visited = new Set<number>();

    if (DFS(u, v, visited)) {
      return [u, v];
    }

    nodeMap.get(u).push(v);
    nodeMap.get(v).push(u);
  }

  return [];
}
