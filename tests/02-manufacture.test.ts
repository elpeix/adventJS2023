import { describe, it, expect } from 'vitest'
import manufacture from '../src/02-manufacture'

describe('manufacture', () => {
  it('should return an array', () => {
    expect(manufacture([], '')).toBeInstanceOf(Array)
  })

  it('should return [] if no gifts', () => {
    expect(manufacture([], 'abc')).toEqual([])
  })

  it('should return [] if no materials', () => {
    expect(manufacture(['a', 'b', 'c'], '')).toEqual([])
  })

  it('should return [] if no gifts and no materials', () => {
    expect(manufacture([], '')).toEqual([])
  })

  it('should return ["tren", "oso"] if gift are ["tren", "oso", "pelota"] and materials are "tronesa"', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual(['tren', 'oso'])
  })

  it('should return ["puzzle"] if gift are ["juego", "puzzle"] and materials are "jlepuz"', () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle'])
  })

  it('should return [] if gift are ["libro", "ps5"] and materials are "psli"', () => {
    expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([])
  })
})
