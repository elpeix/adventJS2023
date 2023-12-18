function optimizeIntervals(intervals: number[][]) {
  return intervals
    .sort((a, b) => a[0] - b[0])
    .reduce(
      (optimized, interval) => {
        const max = optimized[optimized.length - 1][1]
        if (interval[0] > max) {
          optimized.push(interval)
        } else {
          optimized[optimized.length - 1][1] = Math.max(interval[1], max)
        }
        return optimized
      },
      [intervals[0]]
    )
}

export default optimizeIntervals
