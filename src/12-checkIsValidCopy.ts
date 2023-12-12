function checkIsValidCopy(original: string, copy: string): boolean {
  if (original.length !== copy.length) {
    return false
  }
  original = original.toLowerCase()
  const charRx = /([a-z])/
  const copyRx = /([.:+#\s])/
  for (let i = 0; i < original.length; i++) {
    const origChr = original.charAt(i)
    const copyChr = copy.charAt(i)
    if (origChr !== copyChr) {
      if (charRx.test(origChr)) {
        if (!copyRx.test(copyChr)) {
          return false
        }
      } else {
        return false
      }
    }
  }
  return true
}

export default checkIsValidCopy
