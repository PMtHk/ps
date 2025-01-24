function eventualSafeNodes(graph: number[][]): number[] {
    const n = graph.length
    
    const answer: Set<number> = new Set()
    const queue:number[] = []
  
    const ingoing: number[][] = new Array(n).fill(0).map(_ => new Array())
    graph.forEach((arr, index) => {
      if(arr.length === 0) {
        answer.add(index)
      }
  
      arr.forEach(dest => {
        ingoing[dest].push(index)
      })
    })
  
    Array.from(answer).forEach(elem => {
      queue.push(...ingoing[elem])
    })
  
    while (queue.length) {
      const next = queue.pop()
  
      if (graph[next].every(elem => answer.has(elem))) {
        answer.add(next)
        queue.push(...ingoing[next])
      }
    }
  
    return Array.from(answer).sort((a,b) => a - b)
  }