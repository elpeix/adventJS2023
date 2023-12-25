function travelDistance(map: string): number {
  const rows = map.split('\n')
  const linedMap = rows.join('')
  const colsLength = rows[0].length
  const kids = linedMap.match(/\d/g) || []

  let santRow = rows.findIndex((row) => row.includes('S'))
  let santaCol = rows[santRow].indexOf('S')
  let distance = 0

  for (let kid = 1; kid <= kids.length; kid++) {
    const kidIndex = linedMap.indexOf(kid.toString())
    const kidRow = ~~(kidIndex / colsLength)
    const kidCol = kidIndex % colsLength
    distance += Math.abs(kidRow - santRow) + Math.abs(kidCol - santaCol)
    santRow = kidRow
    santaCol = kidCol
  }

  return distance
}

export default travelDistance
