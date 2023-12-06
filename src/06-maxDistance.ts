function maxDistance(movements: string): number {
  let rightDistance = 0
  let leftDistance = 0
  let bothDistance = 0
  Array.from(movements).forEach((movement) => {
    if (movement === '>') {
      rightDistance++
    }
    if (movement === '<') {
      leftDistance++
    }
    if (movement === '*') {
      bothDistance++
    }
  })
  const toRight = Math.abs(rightDistance + bothDistance - leftDistance)
  const toLeft = Math.abs(leftDistance + bothDistance - rightDistance)
  return Math.max(toRight, toLeft)
}

export default maxDistance
