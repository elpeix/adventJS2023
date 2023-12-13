import { describe, it, expect } from 'vitest'
import calculateTime from '../src/13-calculateTime'

describe('calculateTime', () => {
  it('should return string', () => {
    expect(typeof calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe(
      'string'
    )
  })

  it('should return "-02:20:00" when one deliveries are ["00:10:00", "01:00:00", "03:30:00"]', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe(
      '-02:20:00'
    )
  })

  it('should return "00:30:00" when one deliveries are ["00:10:00", "01:00:00", "03:30:00"]', () => {
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00')
  })

  it('should return "-00:30:00" when one deliveries are ["01:00:00", "05:00:00", "00:30:00"]', () => {
    expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toBe(
      '-00:30:00'
    )
  })

  it('should return "-05:29:00" when one deliveries are ["00:45:00", "00:45:00", "00:00:30", "00:00:30"]', () => {
    expect(
      calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
    ).toBe('-05:29:00')
  })

  it('should return "00:00:00" when one deliveries are ["02:00:00", "03:00:00", "02:00:00"]', () => {
    expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toBe('00:00:00')
  })
})
