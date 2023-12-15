import { describe, it, expect } from 'vitest'
import autonomousDrive from '../src/15-autonomousDrive'

describe('autonomousDrive', () => {
  it('should return string[]', () => {
    expect(Array.isArray(autonomousDrive(['..!....'], ['R']))).toBe(true)
  })

  it('should move right', () => {
    expect(autonomousDrive(['..!....'], ['R'])).toEqual(['...!...'])
  })

  it('should move left', () => {
    expect(autonomousDrive(['..!....'], ['L'])).toEqual(['.!.....'])
  })

  it('should move right twice', () => {
    expect(autonomousDrive(['....!..'], ['R', 'R'])).toEqual(['......!'])
  })

  it('should move left one to limit', () => {
    expect(autonomousDrive(['.!.....'], ['L', 'L'])).toEqual(['!......'])
  })

  it('should move down', () => {
    expect(autonomousDrive(['.!.....', '.......'], ['D'])).toEqual([
      '.......',
      '.!.....',
    ])
  })

  it('should stay at same place', () => {
    expect(autonomousDrive(['.*!....'], ['L', 'L'])).toEqual(['.*!....'])
    expect(autonomousDrive(['.*!*...'], ['L', 'L', 'R', 'R'])).toEqual([
      '.*!*...',
    ])
  })

  it('should move down twice', () => {
    expect(
      autonomousDrive(['.!.....', '.......', '.......'], ['D', 'D'])
    ).toEqual(['.......', '.......', '.!.....'])
  })

  it('should move down and right', () => {
    expect(
      autonomousDrive(['.!.....', '.......', '.......'], ['D', 'R'])
    ).toEqual(['.......', '..!....', '.......'])
  })

  it('should move only left', () => {
    expect(
      autonomousDrive(['.......', '.......', '.....!.'], ['D', 'L'])
    ).toEqual(['.......', '.......', '....!..'])
  })

  it('should move up', () => {
    expect(
      autonomousDrive(['.......', '.......', '.!.....'], ['U', 'U'])
    ).toEqual(['.!.....', '.......', '.......'])
  })

  it('should stay at same place', () => {
    expect(
      autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])
    ).toEqual(['***', '*!*', '***'])
  })

  // prettier-ignore
  it('shouldreturn the final positin in store', () => {
    const store = [
      '..!....',
      '...*.*.'
    ]
    const movements = ['R', 'R', 'D', 'L']
    const expected = [
      '.......',
      '...*!*.',
    ]
    expect(autonomousDrive(store, movements)).toEqual(expected)
  })
})
