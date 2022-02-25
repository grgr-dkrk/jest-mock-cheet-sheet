import { rand } from './mathRand'

describe('rand: spy', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0)
  })
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })
  it('should return 0', () => {
    expect(rand()).toBe(0)
  })
  it('should return 5', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(5)
    expect(rand()).toBe(5)
  })
})
