function countServers(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
  
    let answer = 0
    const checked: boolean[][] = 
      new Array(m).fill(false)
        .map(_ => new Array(n).fill(false))
  
    for (let i = 0; i < m; i++) {
      const row = grid[i]
      
      if (row.filter(Boolean).length > 1) {
        for (let j = 0; j < n; j++) {
          if (!checked[i][j] && grid[i][j]) {
            checked[i][j] = true
            answer++
          }
        }
      }
    }
  
    for (let j = 0; j < n; j++) {
      const col = grid.map(row => row[j])
    
      if (col.filter(Boolean).length > 1) {
        for (let i = 0; i < m; i++) {
          if (!checked[i][j] && grid[i][j]) {
            checked[i][j] = true
            answer++
          }
        }
      }
    }
  
    return answer
  };