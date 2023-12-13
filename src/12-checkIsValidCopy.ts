function checkIsValidCopy(original: string, copy: string): boolean {
  if (original.length !== copy.length) {
    return false
  }
  const charRx = /([a-z#])/i
  const copyRx = /([.:+#\s])/
  for (let i = 0; i < original.length; i++) {
    const origChr = original.charAt(i)
    const copyChr = copy.charAt(i)
    if (origChr !== copyChr && origChr.toLowerCase() !== copyChr) {
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
