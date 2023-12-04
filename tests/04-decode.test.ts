import { describe, it, expect } from 'vitest'
import decode from '../src/04-decode'

describe('decode', () => {
  it('should return a string', () => {
    expect(typeof decode('')).toBe('string')
  })

  it('should return "hola" if message is "hola"', () => {
    expect(decode('hola')).toBe('hola')
  })

  it('should return "hola" if message is "(aloh)"', () => {
    expect(decode('(aloh)')).toBe('hola')
  })

  it('should return "hola mundo" if message is "hola (odnum)"', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo')
  })

  it('should return "hello world!" if message is "(olleh) (dlrow)!"', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!')
  })

  it('should return "santaclaus" if message is "sa(u(cla)atn)s"', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
  })

  it('should return "patata" if message is "p((atat))a"', () => {
    expect(decode('p((atat))a')).toBe('patata')
  })

  it('should return "patata" if message is "p((at(at))a)"', () => {
    expect(decode('p((at((at))a))')).toBe('patata')
  })

  it('should return "a()a" if message is "aa"', () => {
    expect(decode('a()a')).toBe('aa')
  })

  it('should return "hello world!" if message is "(dlrow olleh)!"', () => {
    expect(decode('(dlrow olleh)!')).toBe('hello world!')
  })
})
