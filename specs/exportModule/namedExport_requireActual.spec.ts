import { sumRand } from './namedExport'
import { getFoo } from './namedExport_module'
jest.mock('./namedExport_module', () => {
  const __original = jest.requireActual('./namedExport_module')
  return {
    __esModule: true,
    ...__original,
    rand: jest.fn().mockImplementation(() => 10),
  }
})

describe('namedExport with actual', () => {
  describe('getBar', () => {
    it('should return 20', () => {
      expect(sumRand(10)).toBe(20)
    })
  })

  describe('getFoo', () => {
    it('should return foo', () => {
      expect(getFoo()).toBe('foo')
    })
  })
})
