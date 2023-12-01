function findFirstRepeated(gifts: number[]): number {
  const set: Set<number> = new Set()
  for (const gift of gifts) {
    if (set.has(gift)) {
      return gift
    }
    set.add(gift)
  }
  return -1
}
export default findFirstRepeated