import * as modules from './namedExport_module'

const sumRand = (num: number): number => num + modules.rand()

describe('namedExport', () => {
  let spy: jest.SpyInstance
  beforeAll(() => {
    spy = jest.spyOn(modules, 'rand')
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
