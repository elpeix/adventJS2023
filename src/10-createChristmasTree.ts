function createChristmasTree(ornaments: string, height: number): string {
  const tree = []
  const ornamentsLength = ornaments.length
  let carry = 0
  for (let i = 0; i < height; i++) {
    let rowOrnaments = []
    for (let j = 0; j <= i; j++) {
      rowOrnaments.push(ornaments[carry % ornamentsLength])
      carry++
    }
    tree.push(`${' '.repeat(height - i - 1)}${rowOrnaments.join(' ')}`)
  }
  return [...tree, `${' '.repeat(height - 1)}|`, ''].join('\n')
}

export default createChristmasTree
