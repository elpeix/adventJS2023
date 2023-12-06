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

// Regex solution
// function maxDistance(movements: string): number {
//   const countRight = (movements.match(/>/g) || []).length
//   const countLeft = (movements.match(/</g) || []).length
//   const countBoth = (movements.match(/\*/g) || []).length
//   const toRight = Math.abs(countRight + countBoth - countLeft)
//   const toLeft = Math.abs(countLeft + countBoth - countRight)
//   return Math.max(toRight, toLeft)
// }

export default maxDistance
