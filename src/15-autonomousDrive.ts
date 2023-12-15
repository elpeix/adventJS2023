function autonomousDrive(store: string[], movements: string[]): string[] {
  const positions: {
    [key: string]: number[]
  } = {
    R: [0, 1],
    L: [0, -1],
    D: [1, 0],
    U: [-1, 0],
  }
  const storeArr = store.map((ln) => ln.split(''))
  let initLine = storeArr.findIndex((ln) => ln.includes('!'))
  let initCol = storeArr[initLine].indexOf('!')

  for (const mov of movements) {
    const [row, col] = positions[mov]
    const newRow = initLine + row
    const newCol = initCol + col

    if (newCol < store[0].length && storeArr[newRow]?.[newCol] === '.') {
      storeArr[initLine][initCol] = '.'
      storeArr[newRow][newCol] = '!'
      initLine = newRow
      initCol = newCol
    }
  }
  return storeArr.map((ln) => ln.join(''))
}

// Other resolution
// function autonomousDrive(store: string[], movements: string[]): string[] {
//   for (const mov of movements) {
//     switch (mov) {
//       case 'R':
//         store = store.map((ln) => ln.replace('!.', '.!'))
//         break
//       case 'L':
//         store = store.map((ln) => ln.replace('.!', '!.'))
//         break
//       case 'D':
//       case 'U':
//         const lnI = store.findIndex((ln) => ln.includes('!'))
//         const lnJ = lnI + (mov === 'D' ? 1 : -1)
//         const robot = store[lnI].indexOf('!')
//         const n = store[lnJ]
//         if (n !== undefined && n[robot] === '.') {
//           store[lnI] = store[lnI].replace('!', '.')
//           store[lnJ] = n.slice(0, robot) + '!' + n.slice(robot + 1)
//         }
//         break
//     }
//   }
//   return store
// }

export default autonomousDrive
