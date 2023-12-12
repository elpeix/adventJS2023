import { describe, it, expect } from 'vitest'
import checkIsValidCopy from '../src/12-checkIsValidCopy'

describe('checkIsValidCopy', () => {
  it('should return boolean', () => {
    expect(typeof checkIsValidCopy('a', 'a')).toBe('boolean')
  })

  it('should return true when copy is valid', () => {
    expect(checkIsValidCopy('A', 'a')).toBe(true)
    expect(checkIsValidCopy('a', 'a')).toBe(true)
    expect(checkIsValidCopy('a', '#')).toBe(true)
    expect(checkIsValidCopy('a', '+')).toBe(true)
    expect(checkIsValidCopy('a', ':')).toBe(true)
    expect(checkIsValidCopy('a', '.')).toBe(true)
    expect(checkIsValidCopy('a', ' ')).toBe(true)
    expect(checkIsValidCopy('1', '1')).toBe(true)
  })

  it('should return false when copy is invalid', () => {
    expect(checkIsValidCopy('A', 'b')).toBe(false)
    expect(checkIsValidCopy('a', 'A')).toBe(false)
    expect(checkIsValidCopy('a', 'b')).toBe(false)
    expect(checkIsValidCopy('a', '1')).toBe(false)
    expect(checkIsValidCopy('a', 'ab')).toBe(false)
    expect(checkIsValidCopy('1', '.')).toBe(false)
  })

  it('should return true when copy is valid', () => {
    expect(
      checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
    ).toBe(true)
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBe(true)
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true)
    expect(checkIsValidCopy('3 regalos', '3 .+:# #:')).toBe(true)
    expect(checkIsValidCopy('3 regalos', '3        ')).toBe(true)
    expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toBe(true)
  })

  it('should return false when copy is invalid', () => {
    expect(
      checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')
    ).toBe(false)
    expect(checkIsValidCopy('Santa Claus', 'Santa Claus ')).toBe(false)
    expect(checkIsValidCopy('Santa Claus', 'sant##claus+')).toBe(false)
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false)
    expect(checkIsValidCopy('Santa Claus', 'SantA ClauS')).toBe(false)
    expect(
      checkIsValidCopy(
        'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños',
        'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño'
      )
    ).toBe(false)
  })
})
