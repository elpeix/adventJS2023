function organizeGifts(gifts: string): string {
  const numbers = gifts.match(/\d+/g)
  const letters = gifts.match(/[a-z]/g)
  if (!numbers || !letters) {
    return ''
  }
  return letters.reduce((acc, gift, i) => {
    const count = Number(numbers[i])
    const pallets = ~~(count / 50) // ~~ is a faster Math.floor
    const boxes = ~~((count - pallets * 50) / 10)
    const gifts = count - pallets * 50 - boxes * 10

    const palletsString = pallets ? `[${gift}]`.repeat(pallets) : ''
    const boxesString = boxes ? `{${gift}}`.repeat(boxes) : ''
    const giftsString = gifts ? `(${gift.repeat(gifts)})` : ''
    return `${acc}${palletsString}${boxesString}${giftsString}`
  }, '')
}

export default organizeGifts
