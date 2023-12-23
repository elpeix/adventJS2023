import { describe, it, expect } from 'vitest'
import findBalancedSegment from '../src/21-findBalancedSegment'

describe('findBalancedSegment', () => {
  it('should return array', () => {
    expect(Array.isArray(findBalancedSegment([1]))).toBe(true)
  })

  it('should return a [0, 1] when input is [1, 0]', () => {
    expect(findBalancedSegment([1, 0])).toEqual([0, 1])
  })

  it('should return a [] when input is [1, 1, 1]', () => {
    expect(findBalancedSegment([1, 1, 1])).toEqual([])
  })

  it('should return a [2, 5] when input is [1, 1, 0, 1, 1, 0, 1, 1]', () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toEqual([2, 5])
  })

  it('should return a [1, 2] when input is [1, 1, 0]', () => {
    expect(findBalancedSegment([1, 1, 0])).toEqual([1, 2])
  })
})
