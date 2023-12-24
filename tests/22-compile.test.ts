import { describe, it, expect } from 'vitest'
import compile from '../src/22-compile'

describe('compile', () => {
  it('should return number', () => {
    expect(typeof compile('')).toBe('number')
  })

  it('should return 0 when input is ""', () => {
    expect(compile('')).toBe(0)
  })

  it('should return 1 when input is "+"', () => {
    expect(compile('+')).toBe(1)
  })

  it('should return 2 when input is "++"', () => {
    expect(compile('++')).toBe(2)
  })

  it('should return -1 when input is "-"', () => {
    expect(compile('-')).toBe(-1)
  })

  it('should return -2 when input is "--"', () => {
    expect(compile('--')).toBe(-2)
  })

  it('should return 0 when input is "+-"', () => {
    expect(compile('+-')).toBe(0)
  })

  it('should return 0 when input is "-+"', () => {
    expect(compile('-+')).toBe(0)
  })

  it('should return 4 when input is "++*"', () => {
    expect(compile('++*')).toBe(4)
  })

  it('should return 3 when input is "++*-"', () => {
    expect(compile('++*-')).toBe(3)
  })

  it('should return 3 when input is "++¿+?"', () => {
    expect(compile('++¿+?')).toBe(3)
  })

  it('should return -1 when input is "-¿++*?"', () => {
    expect(compile('-¿++*?')).toBe(-1)
  })

  it('should return 0 when input is "-+¿++*?"', () => {
    expect(compile('-+¿++*?')).toBe(0)
  })

  it('should return -1 when input is "--¿+++?+++¿--?"', () => {
    expect(compile('--¿+++?+++¿--?')).toBe(-1)
  })

  it('should return 6 when input is "++%++<"', () => {
    expect(compile('++%++<')).toBe(6)
  })

  it('should return 4 when input is "++++<"', () => {
    expect(compile('++++<')).toBe(4)
  })

  it('should return 7 when input is "<%+¿++%++<?"', () => {
    expect(compile('<%+¿++%++<?')).toBe(7)
  })
})
