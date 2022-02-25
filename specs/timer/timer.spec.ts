const timer = (cb: () => any) => {
  setTimeout(() => {
    cb()
  }, 1000)
}

describe('timer', () => {
  const fn = jest.fn()
  beforeAll(() => {
    jest.useFakeTimers('modern')
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  it('should called fn after timer', () => {
    timer(fn)
    expect(fn).toBeCalledTimes(0)
    jest.advanceTimersToNextTimer()
    expect(fn).toBeCalledTimes(1)
  })
})
