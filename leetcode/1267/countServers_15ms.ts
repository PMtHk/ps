function countServers(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
  
    const rows: number[] = []
    const cols: number[] = []
  
    let answer = 0
  
    for (let i = 0; i < m; i++) {
      const row = grid[i]
      const count = row.filter(Boolean).length
      
      if (count > 1) {
        answer += count 
        rows.push(i)
      }
    }
  
    for (let j = 0; j < n; j++) {
      const col = grid.map(row => row[j])
      const count = col.filter(Boolean).length
    
      if (count > 1) {
        answer += count
        cols.push(j)
      }
    }
  
    for (let k = 0; k < rows.length; k++) {
      for (let l = 0; l < cols.length; l++) {
        if (grid[rows[k]][cols[l]]) {
          answer--
        }
      }
    }
  
    return answer
  };