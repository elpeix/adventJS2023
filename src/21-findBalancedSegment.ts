function findBalancedSegment(message: number[]) {
  let result: number[] = []
  let count = 0
  for (let i = 0; i < message.length; i++) {
    let value = message[i]
    let internalCount = 1
    for (let j = i + 1; j < message.length; j++) {
      value += message[j]
      internalCount++
      if (internalCount / value === 2 && internalCount > count) {
        result = [i, j]
        count = internalCount
      }
    }
  }
  return result
}

export default findBalancedSegment
