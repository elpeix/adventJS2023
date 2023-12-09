function adjustLights(lights: string[]): number {
  let wrongLightsGreen = 0
  let wrongLightsRed = 0
  const alternateGreen = '🟢'
  const alternateRed = '🔴'
  for (let i = 0; i < lights.length - 1; i += 2) {
    if (lights[i] !== alternateGreen) {
      wrongLightsGreen++
    }
    if (lights[i] !== alternateRed) {
      wrongLightsRed++
    }
    if (lights[i + 1] === alternateGreen) {
      wrongLightsGreen++
    }
    if (lights[i + 1] === alternateRed) {
      wrongLightsRed++
    }
  }
  return Math.min(wrongLightsGreen, wrongLightsRed)
}

export default adjustLights
