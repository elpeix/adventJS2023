function decode(message: string): string {
  // Captures "( letters and numbers and spaces )". Maybe [^()]* would be better
  const rgx = /\(([\w\s]*)\)/
  while (rgx.test(message)) {
    message = message.replace(rgx, (_, w) => w.split('').reverse().join(''))
  }
  return message
}

export default decode
