describe('mockClear', () => {
  /**
   * Clears all information stored in the mockFn.mock.calls, mockFn.mock.instances and mockFn.mock.results arrays. Often this is useful when you want to clean up a mocks usage data between two assertions.
   * https://jestjs.io/docs/mock-function-api#mockfnmockclear
   */
  it('should clear calledTimes', () => {
    const jestFn = jest.fn()
    expect(jestFn).toBeCalledTimes(0)
    jestFn()
    expect(jestFn).toBeCalledTimes(1)
    jestFn()
    expect(jestFn).toBeCalledTimes(2)
    jestFn()
    jestFn.mockClear() // clears all calls, instances, and results in the jestFn
    expect(jestFn).toBeCalledTimes(0)
    jestFn()
    expect(jestFn).toBeCalledTimes(1)
  })
  it('should clear instances ', () => {
    const jestFn = jest.fn()
    new jestFn()
    new jestFn()
    new jestFn()
    expect(jestFn.mock.instances).toEqual([{}, {}, {}])
    jestFn.mockClear()
    expect(jestFn.mock.instances).toEqual([])
  })
  it('should clear results ', () => {
    const jestFn = jest.fn().mockImplementation(() => 'foo')
    jestFn()
    jestFn()
    jestFn()
    expect(jestFn.mock.results).toEqual([
      {
        type: 'return',
        value: 'foo',
      },
      {
        type: 'return',
        value: 'foo',
      },
      {
        type: 'return',
        value: 'foo',
      },
    ])
    jestFn.mockClear()
    expect(jestFn.mock.results).toEqual([])
  })
})
