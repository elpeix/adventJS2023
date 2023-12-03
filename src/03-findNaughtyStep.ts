function findNaughtyStep(original: String, modified: String): String {
  const [shorter, longer] = [original, modified].sort(
    (a, b) => a.length - b.length
  )
  const result = longer.split('').find((_, i) => longer[i] !== shorter[i])
  return result ? result.toString() : ''
}

export default findNaughtyStep
