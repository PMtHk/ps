function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
    const preMap = new Map<number, number[]>()
    const memo = new Map<number, Set<number>>()
  
    prerequisites.map(([pre, next]) => {
      if (!preMap.has(next)) {
        preMap.set(next, [pre])
      } else {
        preMap.set(next, [...preMap.get(next), pre])
      }
    })
  
    const DFS = (next: number): Set<number> => {
      if (memo.has(next)) {
        return memo.get(next)
      }
  
      const preSet = new Set<number>(preMap.get(next))
  
      for (const pre of preSet) {
        for (const nextPre of DFS(pre)) {
          preSet.add(nextPre)
        }
      }
  
      memo.set(next, preSet)
      return preSet
    }
  
    for (let i = 0; i < numCourses; i++) {
      DFS(i)
    }
  
    return queries.map(([pre, next]) => memo.get(next).has(pre))
  }