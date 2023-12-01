import { describe, it, expect } from 'vitest'
import findFirstRepeated from '../src/01-findFirstRepeated'

describe('findFirstRepeated', () => {
  it('should return the first repeated element', () => {
    expect(findFirstRepeated([1, 2, 3, 4, 4])).toBe(4)
    expect(findFirstRepeated([1, 2, 3, 4, 1])).toBe(1)
    expect(findFirstRepeated([1, 2, 3, 4, 2])).toBe(2)
    expect(findFirstRepeated([1, 2, 3, 4, 3])).toBe(3)
  })

  it('should return the first repeated element', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
    expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
  })

  it('should return -1 if no repeated element', () => {
    expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
  })
})
