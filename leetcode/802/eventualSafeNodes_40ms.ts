function eventualSafeNodes(graph: number[][]): number[] {
    const visited: Set<number> = new Set()
    const safeTerminal: Set<number> = new Set()
  
    const DFS = (node: number) => {
      if (visited.has(node)) {
        return
      }
  
      visited.add(node)
  
      if (!graph[node].length) {
        safeTerminal.add(node)
        return
      }
  
      const isSafe = graph[node].every((node) => {
        DFS(node)
        return safeTerminal.has(node)
      })
  
      if (isSafe) {
        safeTerminal.add(node)
      }
    }
  
    graph.forEach((_, index) => {
      if(visited.has(index)) {
        return
      }
  
      DFS(index)
    })
  
    return Array.from(safeTerminal).sort((a, b) => a - b)
  }