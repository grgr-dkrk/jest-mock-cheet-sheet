import * as mockRestoreModule from './mockRestoreModule'

describe('mockRestore', () => {
  let spy: jest.SpyInstance
  /**
   * Does everything that mockFn.mockReset() does, and also restores the original (non-mocked) implementation.
   *
   * Beware that mockFn.mockRestore only works when the mock was created with jest.spyOn. Thus you have to take care of restoration yourself when manually assigning jest.fn().
   * https://jestjs.io/docs/mock-function-api#mockfnmockrestore
   */
  it('should return 100', () => {
    spy = jest.spyOn(mockRestoreModule, 'sum').mockImplementation(() => 100)
    expect(mockRestoreModule.sum(2, 3)).toBe(100)
  })
  it('should return 100 again', () => {
    expect(mockRestoreModule.sum(2, 3)).toBe(100)
  })
  it('should return 5', () => {
    spy.mockRestore() // restore spy mock
    expect(mockRestoreModule.sum(2, 3)).toBe(5)
  })
  it('should return 5 again', () => {
    expect(mockRestoreModule.sum(2, 3)).toBe(5)
  })

  describe('if not restored', () => {
    describe('describe:A', () => {
      it('should return 100', () => {
        spy = jest.spyOn(mockRestoreModule, 'sum').mockImplementation(() => 100)
        expect(mockRestoreModule.sum(2, 3)).toBe(100)
      })
    })
    describe('describe:B', () => {
      it('expect return 5, but return 100', () => {
        expect(mockRestoreModule.sum(2, 3)).not.toBe(5)
        expect(mockRestoreModule.sum(2, 3)).toBe(100)
      })
    })
  })

  describe('lifeCycle', () => {
    beforeAll(() => {
      spy = jest.spyOn(mockRestoreModule, 'sum').mockImplementation(() => 100)
    })
    afterEach(() => {
      spy.mockRestore()
    })
    describe('describe:A', () => {
      it('should return 100', () => {
        spy = jest.spyOn(mockRestoreModule, 'sum').mockImplementation(() => 100)
        expect(mockRestoreModule.sum(2, 3)).toBe(100)
      })
      it('should return 5', () => {
        expect(mockRestoreModule.sum(2, 3)).toBe(5)
      })
    })
    describe('describe:B', () => {
      it('should return 5', () => {
        expect(mockRestoreModule.sum(2, 3)).toBe(5)
      })
    })
  })
})
