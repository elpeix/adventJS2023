function distributeGifts(weights: (number | null)[][]) {
  const result: number[][] = []
  for (let i = 0; i < weights.length; i++) {
    const row: number[] = []
    for (let j = 0; j < weights[i].length; j++) {
      const top = weights[i - 1]?.[j] ?? 0
      const bottom = weights[i + 1]?.[j] ?? 0
      const left = weights[i][j - 1] ?? 0
      const right = weights[i][j + 1] ?? 0
      const current = weights[i][j] ?? 0
      const sum = current + left + top + bottom + right
      const count = [left, top, bottom, right, current].filter(
        (x) => x !== 0
      ).length
      row[j] = Math.round(sum / count) // (sum / count + 0.5) | 0 is also valid
    }
    result[i] = row
  }
  return result
}

export default distributeGifts
