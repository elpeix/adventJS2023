import { describe, it, expect } from 'vitest'
import adjustLights from '../src/09-adjustLights'

describe('adjustLights', () => {
  it('should return a number', () => {
    expect(typeof adjustLights([])).toBe('number')
  })

  it('should return 0 for an empty array', () => {
    expect(adjustLights([])).toBe(0)
  })

  it('should return 0 for a single light', () => {
    expect(adjustLights(['🟢'])).toBe(0)
    expect(adjustLights(['🔴'])).toBe(0)
  })

  it('should return 0 for a correct alternation', () => {
    expect(adjustLights(['🟢', '🔴'])).toBe(0)
    expect(adjustLights(['🔴', '🟢'])).toBe(0)
    expect(adjustLights(['🟢', '🔴', '🟢'])).toBe(0)
    expect(adjustLights(['🔴', '🟢', '🔴'])).toBe(0)
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0)
  })

  it('should return 1 for a single incorrect alternation', () => {
    expect(adjustLights(['🟢', '🟢'])).toBe(1)
    expect(adjustLights(['🟢', '🟢', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴'])).toBe(1)
    expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1)
  })

  it('should return 1 when fourth light is wrong', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(1)
  })

  it('should return 2 when the second and third lights are wrong', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2)
  })

  it('should return 3 when the second, third and fourth lights are wrong', () => {
    // Or the first, fifth and sixth lights are wrong
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🔴', '🟢'])).toBe(3)
  })

  it('should return 1 when the first is wrong', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢', '🔴'])).toBe(1)
  })
})
