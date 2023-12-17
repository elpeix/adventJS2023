import { describe, it, expect } from 'vitest'
import transformTree from '../src/16-transformTree'

describe('transformTree', () => {
  it('should return object', () => {
    expect(typeof transformTree([1, 2, 3, 4, 5])).toBe('object')
  })

  it('should return null', () => {
    expect(transformTree([])).toBe(null)
  })

  it('should return object with value and left and right with null', () => {
    expect(transformTree([1])).toEqual(
      expect.objectContaining({
        value: 1,
        left: null,
        right: null,
      })
    )
  })

  it('should return object with value and left filled', () => {
    expect(transformTree([1, 2])).toEqual(
      expect.objectContaining({
        value: 1,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: null,
      })
    )
  })

  it('should return object with value and right filled', () => {
    expect(transformTree([3, 1, 0, 8, 12, null, 1])).toEqual(
      expect.objectContaining({
        value: 3,
        left: {
          value: 1,
          left: {
            value: 8,
            left: null,
            right: null,
          },
          right: {
            value: 12,
            left: null,
            right: null,
          },
        },
        right: {
          value: 0,
          left: null,
          right: {
            value: 1,
            left: null,
            right: null,
          },
        },
      })
    )
  })

  it('should return object with value and right filled', () => {
    expect(transformTree([1, 2, 3])).toEqual(
      expect.objectContaining({
        value: 1,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: {
          value: 3,
          left: null,
          right: null,
        },
      })
    )
  })
})
