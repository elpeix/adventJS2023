import { describe, it, expect } from 'vitest'
import optimizeIntervals from '../src/17-optimizeIntervals'

describe('optimizeIntervals', () => {
  it('should return array', () => {
    expect(Array.isArray(optimizeIntervals([]))).toBe(true)
  })

  it('should return array with one interval', () => {
    expect(optimizeIntervals([[1, 2]])).toEqual([[1, 2]])
  })

  it('should return array with one interval', () => {
    expect(
      optimizeIntervals([
        [1, 3],
        [2, 4],
      ])
    ).toEqual([[1, 4]])
  })

  it('should return array with two intervals', () => {
    expect(
      optimizeIntervals([
        [1, 4],
        [5, 6],
      ])
    ).toEqual([
      [1, 4],
      [5, 6],
    ])
  })

  it('should return array with two intervals', () => {
    expect(
      optimizeIntervals([
        [1, 3],
        [2, 4],
        [5, 6],
      ])
    ).toEqual([
      [1, 4],
      [5, 6],
    ])
  })

  it('should return array with three intervals', () => {
    expect(
      optimizeIntervals([
        [1, 3],
        [2, 4],
        [5, 6],
        [7, 8],
      ])
    ).toEqual([
      [1, 4],
      [5, 6],
      [7, 8],
    ])
  })

  it('should return array with three intervals given unordered intervals', () => {
    expect(
      optimizeIntervals([
        [3, 4],
        [1, 2],
        [5, 6],
      ])
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  })
})
