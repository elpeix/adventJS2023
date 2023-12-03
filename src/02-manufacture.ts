function manufacture(gifts: String[], materials: String): String[] {
  return gifts.filter((gift) =>
    gift.split('').every((c) => materials.includes(c))
  )
}

export default manufacture
