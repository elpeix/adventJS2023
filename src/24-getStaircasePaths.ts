function getStaircasePaths(steps: number, maxJump: number): number[][] {
  const staircasePaths: number[][] = []
  const path: number[] = []
  if (steps === 0) {
    staircasePaths.push(path)
    return staircasePaths
  }
  for (let i = 1; i <= maxJump && i <= steps; i++) {
    for (const paths of getStaircasePaths(steps - i, maxJump)) {
      staircasePaths.push([...path, i, ...paths])
    }
  }
  return staircasePaths
}

export default getStaircasePaths
