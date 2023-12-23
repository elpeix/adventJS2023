import { describe, it, expect } from 'vitest'
import distributeGifts from '../src/20-distributeGifts'

describe('distributeGifts', () => {
  it('should return array', () => {
    expect(Array.isArray(distributeGifts([[1]]))).toBe(true)
  })

  it('should return a valid solution', () => {
    expect(distributeGifts([[1]])).toEqual([[1]])
    expect(
      distributeGifts([
        [1, 1],
        [1, 1],
      ])
    ).toEqual([
      [1, 1],
      [1, 1],
    ])
  })

  it('should return a valid solution', () => {
    expect(
      distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
      ])
    ).toEqual([
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4],
    ])
  })
})
