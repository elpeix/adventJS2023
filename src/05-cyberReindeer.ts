function cyberReindeer(road: string, time: number): string[] {
  const openOnTime = 5
  const openRegex = /\|/g // \| is the door
  const stepRegex = /S([^|])/ // S can move to . or *
  const steps = [road]
  let prevRoadPosition = '.'
  for (let i = 1; i < time; i++) {
    if (i === openOnTime) {
      road = road.replace(openRegex, '*')
    }
    const matchRes = road.match(stepRegex)
    if (matchRes) {
      road = road.replace(stepRegex, `${prevRoadPosition}S`)
      prevRoadPosition = matchRes[1]
    }
    steps.push(road)
  }
  return steps
}

export default cyberReindeer
