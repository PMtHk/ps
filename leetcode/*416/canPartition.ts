function canPartition(nums: number[]): boolean {
  const totalSum = nums.reduce((sum, num) => sum + num, 0)

  if (totalSum % 2 !== 0) return false

  const target = totalSum / 2
  const reachableSums = Array(target + 1).fill(false)
  reachableSums[0] = true

  for (const num of nums) {
    for (let sum = target; sum >= num; sum--) {
      if (reachableSums[sum - num]) {
        reachableSums[sum] = true
      }
    }

    if (reachableSums[target]) return true
  }

  return reachableSums[target]
}
