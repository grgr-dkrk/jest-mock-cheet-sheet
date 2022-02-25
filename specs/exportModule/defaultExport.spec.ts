import { sumRand } from './defaultExport'

describe('defaultExport', () => {
  let spy: jest.SpyInstance
  beforeAll(() => {
    spy = jest.spyOn(require('./defaultExport_module.ts'), 'default')
  })
  it('mockReturnValueOnce', () => {
    spy.mockReturnValueOnce(0)
    expect(sumRand(5)).toBe(5)
  })
  it('mockImplementationOnce', () => {
    spy.mockImplementationOnce(() => 10)
    expect(sumRand(5)).toBe(15)
  })
})
