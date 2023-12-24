function organizeChristmasDinner(dishes: string[][]): string[][] {
  const ingredientsMap = new Map<string, string[]>()
  for (const dish of dishes) {
    const [dishName, ...ingredients] = dish
    for (const ingredient of ingredients) {
      if (ingredientsMap.has(ingredient)) {
        ingredientsMap.get(ingredient)?.push(dishName)
      } else {
        ingredientsMap.set(ingredient, [dishName])
      }
    }
  }
  return Array.from(ingredientsMap.entries())
    .filter(([, dishes]) => dishes.length > 1)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([ingredient, dishes]) => [ingredient, ...dishes.sort()])
}

export default organizeChristmasDinner
