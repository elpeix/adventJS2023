import { describe, it, expect } from 'vitest'
import organizeChristmasDinner from '../src/23-organizeChristmasDinner'

describe('organizeChristmasDinner', () => {
  it('should return array', () => {
    expect(Array.isArray(organizeChristmasDinner([]))).toBe(true)
  })

  it('should return empty array when input is empty', () => {
    expect(organizeChristmasDinner([])).toEqual([])
  })

  it('should return the expected response', () => {
    expect(
      organizeChristmasDinner([
        ['christmas turkey', 'turkey', 'sauce', 'herbs'],
        ['cake', 'flour', 'sugar', 'egg'],
        ['hot chocolate', 'chocolate', 'milk', 'sugar'],
        ['pizza', 'sauce', 'tomato', 'cheese', 'ham'],
      ])
    ).toEqual([
      ['sauce', 'christmas turkey', 'pizza'],
      ['sugar', 'cake', 'hot chocolate'],
    ])
  })
})
