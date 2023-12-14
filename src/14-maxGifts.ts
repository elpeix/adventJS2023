function maxGifts(houses: number[]): number {
  const carry = houses.slice(0, 2)
  for (let i = 2; i < houses.length; i++) {
    const last = carry[carry.length - 1]
    const secondLast = carry[carry.length - 2]
    const current = houses[i]
    carry.push(Math.max(last, secondLast + current))
  }
  return carry[carry.length - 1]
}

export default maxGifts
