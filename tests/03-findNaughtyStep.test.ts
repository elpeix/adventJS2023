import { describe, it, expect } from 'vitest'
import findNaughtyStep from '../src/03-findNaughtyStep'

describe('findNaughtyStep', () => {
  it('should return a string', () => {
    expect(typeof findNaughtyStep('abc', 'def')).toBe('string')
  })

  it('should return "a" if original is "" and modified is "a"', () => {
    expect(findNaughtyStep('', 'a')).toBe('a')
  })

  it('should return "e" if original is "abcd" and modified is "abcde"', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toBe('e')
  })

  it('should return "f" if original is "stepfor" and modified is "stepor"', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toBe('f')
  })

  it('should return "" if original is "abcde" and modified is "abcde"', () => {
    expect(findNaughtyStep('abcde', 'abcde')).toBe('')
  })

  it('should return "o" if original is "xxxx" and modified is "xxoxx"', () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toBe('o')
  })
})
