import { describe, it, expect } from 'vitest'
import drawGift from '../src/07-drawGift'

describe('drawGift', () => {
  it('should return a string', () => {
    expect(typeof drawGift(1, '+')).toBe('string')
  })

  it('should return a # with size 1 and any symbol', () => {
    expect(drawGift(1, '+')).toBe('#\n')
  })

  it('should return a cube with size 2 and any symbol', () => {
    expect(drawGift(2, '+')).toBe(` ##
###
##
`)
  })

  it('should return a cube with size 4 and any symbol', () => {
    expect(drawGift(4, '+')).toBe(`   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`)
  })
})
