import { describe, it, expect } from 'vitest'
import cyberReindeer from '../src/05-cyberReindeer'

describe('cyberReindeer', () => {
  it('should return an array', () => {
    expect(Array.isArray(cyberReindeer('', 0))).toBe(true)
  })

  it('should return ["S"] if road is "S" and time is 0', () => {
    expect(cyberReindeer('S', 0)).toEqual(['S'])
  })

  it('should return ["S.", ".S"] if road is "S." and time is 2', () => {
    expect(cyberReindeer('S.', 2)).toEqual(['S.', '.S'])
  })

  it('should return ["S.|.", ".S|." Xx3] if road is "S.|." and time is 4', () => {
    expect(cyberReindeer('S.|.', 4)).toEqual(['S.|.', '.S|.', '.S|.', '.S|.'])
  })

  it('should return ["S.|.", ".S|." x 4] if road is "S.|." and time is 5', () => {
    expect(cyberReindeer('S.|.', 5)).toEqual([
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.',
      '.S|.',
    ])
  })

  it('should return ["S.|.", ".S|." x 4, "..S."] if road is "S.|." and time is 6', () => {
    expect(cyberReindeer('S.|.', 6)).toEqual([
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.',
      '.S|.',
      '..S.',
    ])
  })

  it('should return ["S.|.", ".S|." x 4, "..S.", "..*S] if road is "S.|." and time is 7', () => {
    expect(cyberReindeer('S.|.', 7)).toEqual([
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.',
      '.S|.',
      '..S.',
      '..*S',
    ])
  })

  it('should return expected result if road is "S..|...|.." and time is 10', () => {
    expect(cyberReindeer('S..|...|..', 10)).toEqual([
      'S..|...|..',
      '.S.|...|..',
      '..S|...|..',
      '..S|...|..',
      '..S|...|..',
      '...S...*..',
      '...*S..*..',
      '...*.S.*..',
      '...*..S*..',
      '...*...S..',
    ])
  })

  it('should return expected result if road is "S.|.|.|......|.||........." and time is 8', () => {
    expect(cyberReindeer('S.|.|.|......|.||.........', 8)).toEqual([
      'S.|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '..S.*.*......*.**.........',
      '..*S*.*......*.**.........',
      '..*.S.*......*.**.........',
    ])
  })
})
