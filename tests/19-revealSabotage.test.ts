import { describe, it, expect } from 'vitest'
import revealSabotage from '../src/19-revealSabotage'

describe('revealSabotage', () => {
  it('should return array', () => {
    expect(Array.isArray(revealSabotage([[' ']]))).toBe(true)
  })

  it('should return a valid solution', () => {
    expect(revealSabotage([['*', '*', '*']])).toEqual([['*', '*', '*']])
    expect(revealSabotage([[' ', ' ', ' ']])).toEqual([[' ', ' ', ' ']])
  })

  it('should return a valid solution', () => {
    expect(revealSabotage([['*', ' ', ' ']])).toEqual([['*', '1', ' ']])
  })

  it('should return a valid solution', () => {
    expect(revealSabotage([['*', ' ', '*']])).toEqual([['*', '2', '*']])
  })

  it('should return a valid solution', () => {
    expect(
      revealSabotage([
        ['*', ' ', '*'],
        ['*', ' ', '*'],
      ])
    ).toEqual([
      ['*', '4', '*'],
      ['*', '4', '*'],
    ])
  })

  it('should return a valid solution', () => {
    expect(
      revealSabotage([
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
      ])
    ).toEqual([
      ['*', '4', '*'],
      ['*', '6', '*'],
      ['*', '4', '*'],
    ])
  })

  it('should return a valid solution', () => {
    expect(
      revealSabotage([
        ['*', '*', '*'],
        ['*', ' ', ' '],
        ['*', ' ', ' '],
        ['*', ' ', ' '],
      ])
    ).toEqual([
      ['*', '*', '*'],
      ['*', '5', '2'],
      ['*', '3', ' '],
      ['*', '2', ' '],
    ])
  })

  it('should return a valid solution', () => {
    expect(
      revealSabotage([
        ['*', ' ', ' ', ' '],
        [' ', ' ', '*', ' '],
        [' ', ' ', ' ', ' '],
        ['*', ' ', ' ', ' '],
      ])
    ).toEqual([
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' '],
    ])
  })
})
