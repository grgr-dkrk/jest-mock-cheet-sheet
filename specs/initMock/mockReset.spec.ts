describe('mockReset', () => {
  /**
   * Does everything that mockFn.mockReset() does, and also restores the original (non-mocked) implementation.
   * https://jestjs.io/docs/mock-function-api#mockfnmockreset
   */
  it('should reset calledTimes', () => {
    const jestFn = jest.fn()
    expect(jestFn).toBeCalledTimes(0)
    jestFn()
    expect(jestFn).toBeCalledTimes(1)
    jestFn()
    expect(jestFn).toBeCalledTimes(2)
    jestFn()
    jestFn.mockReset() // run mockClear() & restores implementation
    expect(jestFn).toBeCalledTimes(0)
    jestFn()
    expect(jestFn).toBeCalledTimes(1)
  })
  it('should reset implementation', () => {
    const jestFn = jest.fn().mockImplementation(() => 'foo')
    jestFn()
    expect(jestFn).toHaveLastReturnedWith('foo')
    jestFn.mockImplementation(() => 'bar')
    jestFn()
    expect(jestFn).toHaveLastReturnedWith('bar')
    jestFn.mockReset()
    jestFn()
    expect(jestFn).toHaveLastReturnedWith(undefined)
  })
})
