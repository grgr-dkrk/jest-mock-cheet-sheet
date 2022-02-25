import { sumRand } from './defaultExport'

jest.mock('./defaultExport_module', () => {
  const __original = jest.requireActual('./defaultExport_module')
  return {
    __esModule: true,
    ...__original,
    default: jest.fn().mockImplementation(() => 10),
  }
})

describe('namedExport with actual', () => {
  describe('getFoo', () => {
    it('should return 20', () => {
      expect(sumRand(10)).toBe(20)
    })
  })
})
