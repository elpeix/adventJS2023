function transformTree(tree: (number | null)[]) {
  const resultTree: {
    value: number | null
    left: {} | null
    right: {} | null
  }[] = tree.map((value) => ({ value, left: null, right: null }))

  for (let i = 1; i < tree.length; i++) {
    if (resultTree[i].value != null) {
      const treeElement = resultTree[~~((i - 1) / 2)]
      if (i % 2 === 0) {
        treeElement.right = resultTree[i]
      } else {
        treeElement.left = resultTree[i]
      }
    }
  }
  return resultTree[0] ?? null
}

export default transformTree
