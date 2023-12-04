function manufacture(gifts: string[], materials: string): string[] {
  return gifts.filter((gift) =>
    gift.split('').every((c) => materials.includes(c))
  )
}

export default manufacture
