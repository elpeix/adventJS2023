function calculateTime(deliveries: string[]): string {
  const sumResult = deliveries.reduce((acc, curr) => {
    const [h, m, s] = curr.split(':').map((v) => Number(v))
    return acc + h * 3600 + m * 60 + s
  }, 0)

  const seven = 25200 // 7 * 3600
  let substraction = seven - sumResult
  let symbol = ''
  if (substraction > 0) {
    symbol = '-'
  } else {
    substraction = sumResult - seven
  }
  const hours = Math.floor(substraction / 3600)
  const minutes = Math.floor((substraction % 3600) / 60)
  const seconds = Math.floor((substraction % 3600) % 60)

  const formattedHours = hours.toString().padStart(2, '0')
  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')
  return `${symbol}${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

export default calculateTime
