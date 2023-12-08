import { describe, it, expect } from 'vitest'
import organizeGifts from '../src/08-organizeGifts'

describe('organizeGifts', () => {
  it('should return a string', () => {
    expect(typeof organizeGifts('')).toBe('string')
  })

  it('should return an additional gift', () => {
    expect(organizeGifts('1a')).toBe('(a)')
  })

  it('should return nine additional gifts', () => {
    expect(organizeGifts('9a')).toBe('(aaaaaaaaa)')
  })

  it('should return a box', () => {
    expect(organizeGifts('10a')).toBe('{a}')
  })

  it('should return four boxes', () => {
    expect(organizeGifts('40a')).toBe('{a}{a}{a}{a}')
  })

  it('should return a box and an additional gift', () => {
    expect(organizeGifts('11a')).toBe('{a}(a)')
  })

  it('should return a pallet', () => {
    expect(organizeGifts('50a')).toBe('[a]')
  })

  it('should return two pallets', () => {
    expect(organizeGifts('100a')).toBe('[a][a]')
  })

  it('should return one pallet, two boxes and six additionals', () => {
    expect(organizeGifts('76a')).toBe('[a]{a}{a}(aaaaaa)')
  })

  it('should return one pallet, two boxes and six additionals for gift a and one box and 1 additional for gift b', () => {
    expect(organizeGifts('76a11b')).toBe('[a]{a}{a}(aaaaaa){b}(b)')
  })
})
