function revealSabotage(store: string[][]) {
  const rowLength = store[0].length
  Array.from({ length: store.length * rowLength }).forEach((_, i) => {
    const row = ~~(i / rowLength)
    const column = i % rowLength
    if (store[row][column] === '*') {
      return
    }
    let count = 0
    for (let j = -1; j <= 1; j++) {
      for (let k = -1; k <= 1; k++) {
        const adjacentRow = row + j
        const adjacentColumn = column + k
        if (store[adjacentRow]?.[adjacentColumn] === '*') {
          count++
        }
      }
    }
    if (count) {
      store[row][column] = count.toString()
    }
  })
  return store
}

export default revealSabotage
