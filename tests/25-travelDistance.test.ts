import { describe, it, expect } from 'vitest'
import travelDistance from '../src/25-travelDistance'

describe('travelDistance', () => {
  it('should return number', () => {
    expect(typeof travelDistance('S1')).toBe('number')
  })

  it('should return the 1km', () => {
    expect(travelDistance('.S1..')).toBe(1)
    expect(travelDistance('..S..\n..1..')).toBe(1)
    expect(travelDistance('..1S..')).toBe(1)
    expect(travelDistance('..1..\n..S..')).toBe(1)
  })

  it('should return the 2km', () => {
    expect(travelDistance('S.1..')).toBe(2)
    expect(travelDistance('S12')).toBe(2)
    expect(travelDistance('..1S.\n..2..')).toBe(2)
    expect(travelDistance('..12\n..S..')).toBe(2)
    expect(travelDistance('..S..\n..1..\n..2..')).toBe(2)
  })

  it('should return the expected result', () => {
    const map = `.....1....
..S.......
..........
....3.....
......2...`
    expect(travelDistance(map)).toBe(12)
  })

  it('should return the expected result', () => {
    const map = `3....1....
..S.......
.........2
..........
......4...`
    expect(travelDistance(map)).toBe(31)
  })
})
