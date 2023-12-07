function drawGift(size: number, symbol: string): string {
  if (size === 1) {
    return `#\n`
  }

  const top: string[] = []
  const bottom: string[] = []

  Array.from({ length: size - 2 }, (_, i) => {
    const topSpacer = ' '.repeat(size - i - 2)
    const symbols = symbol.repeat(size - 2)
    const symbolsRight = symbol.repeat(i)
    top.push(`${topSpacer}#${symbols}#${symbolsRight}#`)
    bottom.unshift(`#${symbols}#${symbolsRight}#`)
  })

  const borderTop: string = `${' '.repeat(size - 1)}${'#'.repeat(size)}`
  const center: string = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`
  const borderBottom: string = '#'.repeat(size)
  const result: string[] = [borderTop, ...top, center, ...bottom, borderBottom]

  return `${result.join('\n')}\n`
}

export default drawGift
