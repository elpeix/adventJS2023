import { describe, it, expect } from 'vitest'
import maxDistance from '../src/06-maxDistance'

describe('maxDistance', () => {
  it('should return a number', () => {
    expect(typeof maxDistance('')).toBe('number')
  })

  it('should return 0 if movements is ""', () => {
    expect(maxDistance('')).toBe(0)
  })

  it('should return 1 if movements is ">"', () => {
    expect(maxDistance('>')).toBe(1)
  })

  it('should return 2 if movements is ">>"', () => {
    expect(maxDistance('>>')).toBe(2)
  })

  it('should return 1 if movements is "<"', () => {
    expect(maxDistance('<')).toBe(1)
  })

  it('should return 2 if movements is "<<"', () => {
    expect(maxDistance('<<')).toBe(2)
  })

  it('should return 0 if movements is "><"', () => {
    expect(maxDistance('><')).toBe(0)
  })

  it('should return 0 if movements is "<>"', () => {
    expect(maxDistance('<>')).toBe(0)
  })

  it('should return 2 if movements is "<<<>"', () => {
    expect(maxDistance('<<<>')).toBe(2)
  })

  it('should return 2 if movements is ">*"', () => {
    expect(maxDistance('>*')).toBe(2)
  })

  it('should return 2 if movements is "*<"', () => {
    expect(maxDistance('*<')).toBe(2)
  })

  it('should return 2 if movements is ">>*<"', () => {
    expect(maxDistance('>>*<')).toBe(2)
  })

  it('should return 5 if movements is ">***>"', () => {
    expect(maxDistance('>***>')).toBe(5)
  })

  it('should return 10 if movements is "**********"', () => {
    expect(maxDistance('**********')).toBe(10)
  })

  it('should return 3 if movements is ">**<<"', () => {
    expect(maxDistance('>**<<')).toBe(3)
  })
})
