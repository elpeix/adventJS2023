function compile(code: string): number {
  let result = 0
  const instructions = code.split('')
  let conditionValue = 1
  let loop = false
  let carry: string[] = []
  while (instructions.length) {
    const instruction = instructions.shift() as string
    if (loop && instruction !== '%') {
      carry.push(instruction)
    }
    if (instruction !== '?' && conditionValue <= 0) {
      continue
    }
    if (instruction === '+') {
      result++
    } else if (instruction === '-') {
      result--
    } else if (instruction === '*') {
      result *= 2
    } else if (instruction === '¿') {
      conditionValue = result
    } else if (instruction === '?') {
      conditionValue = 1
    } else if (instruction === '%') {
      loop = true
      carry = []
    } else if (instruction === '<') {
      loop = false
      instructions.unshift(...carry)
      carry = []
    }
  }

  return result
}

export default compile
