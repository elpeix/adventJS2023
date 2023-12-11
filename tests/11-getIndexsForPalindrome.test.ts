import { describe, it, expect } from 'vitest'
import getIndexsForPalindrome from '../src/11-getIndexsForPalindrome'

describe('getIndexsForPalindrome', () => {
  it('should return an array', () => {
    expect(Array.isArray(getIndexsForPalindrome('a'))).toBe(true)
  })

  it('should return an empty array when word is palindrome', () => {
    expect(getIndexsForPalindrome('anna')).toStrictEqual([])
    expect(getIndexsForPalindrome('aaaaaaaa')).toStrictEqual([])
    expect(getIndexsForPalindrome('12321')).toStrictEqual([])
  })

  it('should return an array when word can be a palindrome with one change', () => {
    expect(getIndexsForPalindrome('abab')).toStrictEqual([0, 1])
  })

  it('should return null word can not be a palindrome', () => {
    expect(getIndexsForPalindrome('abac')).toStrictEqual(null)
    expect(getIndexsForPalindrome('caababa')).toStrictEqual(null)
    expect(getIndexsForPalindrome('12345')).toStrictEqual(null)
  })

  it('should return [4,8] when word is "rotaratov"', () => {
    expect(getIndexsForPalindrome('rotaratov')).toStrictEqual([4, 8])
  })
})
