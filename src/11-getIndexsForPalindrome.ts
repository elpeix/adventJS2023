function getIndexsForPalindrome(word: string): number[] | null {
  if (word === word.split('').reverse().join('')) {
    return []
  }
  const wordLen = word.length
  for (let i = 0; i < Math.ceil(wordLen / 2); i++) {
    for (let j = i + 1; j < wordLen; j++) {
      const wordArrCopy = word.split('')
      ;[wordArrCopy[i], wordArrCopy[j]] = [wordArrCopy[j], wordArrCopy[i]]
      if (wordArrCopy.join('') === wordArrCopy.reverse().join('')) {
        return [i, j]
      }
    }
  }
  return null
}

export default getIndexsForPalindrome
