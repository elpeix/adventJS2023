import { describe, it, expect } from 'vitest'
import maxGifts from '../src/14-maxGifts'

describe('maxGifts', () => {
  it('should return number', () => {
    expect(typeof maxGifts([1, 2, 3])).toBe('number')
  })

  it('should return 4 when houses is [4]', () => {
    expect(maxGifts([4])).toBe(4)
  })

  it('should return 4 when houses is [2, 4, 2]', () => {
    expect(maxGifts([2, 4, 2])).toBe(4)
  })

  it('should return 4 when houses is [1, 2, 3, 1]', () => {
    expect(maxGifts([1, 2, 3, 1])).toBe(4)
  })

  it('should return 2 when houses is [1, 1, 1, 1]', () => {
    expect(maxGifts([1, 1, 1, 1])).toBe(2)
  })

  it('should return 8 when houses is [3, 4, 5]', () => {
    expect(maxGifts([3, 4, 5])).toBe(8)
  })

  it('should return 103 when houses is [1, 3, 1, 3, 100]', () => {
    expect(maxGifts([1, 3, 1, 3, 100])).toBe(103)
  })
})
