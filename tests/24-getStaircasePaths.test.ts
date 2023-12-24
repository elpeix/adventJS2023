import { describe, it, expect } from 'vitest'
import getStaircasePaths from '../src/24-getStaircasePaths'

describe('getStaircasePaths', () => {
  it('should return array', () => {
    expect(Array.isArray(getStaircasePaths(1, 1))).toBe(true)
  })

  it('should return the expected response', () => {
    expect(getStaircasePaths(2, 1)).toEqual([[1, 1]])
  })

  it('should return the expected response', () => {
    expect(getStaircasePaths(3, 3)).toEqual([[1, 1, 1], [1, 2], [2, 1], [3]])
  })

  it('should return the expected response', () => {
    expect(getStaircasePaths(5, 1)).toEqual([[1, 1, 1, 1, 1]])
  })

  it('should return the expected response', () => {
    expect(getStaircasePaths(5, 2)).toEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 2, 1],
      [1, 2, 1, 1],
      [1, 2, 2],
      [2, 1, 1, 1],
      [2, 1, 2],
      [2, 2, 1],
    ])
  })
})
