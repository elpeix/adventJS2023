import { describe, it, expect } from 'vitest'
import createChristmasTree from '../src/10-createChristmasTree'

describe('createChristmasTree', () => {
  it('should return a string', () => {
    expect(typeof createChristmasTree('a', 1)).toBe('string')
  })

  it('should return a tree with one ornament and one height', () => {
    expect(createChristmasTree('a', 1)).toBe('a\n|\n')
  })

  it('should return a tree with two ornaments and two height', () => {
    expect(createChristmasTree('ab', 2)).toBe(` a
b a
 |
`)
  })

  it('should return a tree with three ornaments and three height', () => {
    expect(createChristmasTree('*@o', 3)).toBe(`  *
 @ o
* @ o
  |
`)
  })

  it('should return a tree with three ornaments and 4 height', () => {
    expect(createChristmasTree('123', 4)).toBe(`   1
  2 3
 1 2 3
1 2 3 1
   |
`)
  })
})
