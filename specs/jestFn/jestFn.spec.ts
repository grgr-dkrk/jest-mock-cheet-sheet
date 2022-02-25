describe('jestFn', () => {
  it('toHaveBeenCalled', () => {
    const mockFn = jest.fn()
    mockFn()
    expect(mockFn).toHaveBeenCalled()
  })
  it('toHaveBeenCalledWith', () => {
    const mockFn = jest.fn()
    mockFn('arg')
    expect(mockFn).toHaveBeenCalledWith('arg')
  })
  it('toBeCalledTimes', () => {
    const mockFn = jest.fn()
    for (let i = 0; i < 3; i++) {
      mockFn()
    }
    expect(mockFn).toBeCalledTimes(3)
  })
  it('override function', () => {
    const mockFn = jest.fn((a: number, b: number) => a + b)
    const mockResult = mockFn(1, 1)
    expect(mockResult).toBe(2)
  })
  it('mockReturnValue', () => {
    const mockFn = jest.fn().mockReturnValue('ok')
    mockFn()
    expect(mockFn).toReturnWith('ok')
  })
  it('mockReturnValueOnce', () => {
    const mockFn = jest.fn().mockReturnValueOnce('ok')
    mockFn()
    expect(mockFn).toReturnWith('ok')
    mockFn()
    expect(mockFn).toReturnWith(undefined)
  })
  it('mockResolvedValue', async () => {
    const mockFn = jest.fn().mockResolvedValue('ok')
    await expect(mockFn()).resolves.toBe('ok')
  })
  it('results', () => {
    const mockFn = jest.fn()
    mockFn.mockReturnValueOnce('ok')
    mockFn()
    mockFn.mockReturnValueOnce('ng')
    mockFn()
    mockFn.mockReturnValueOnce('ok')
    mockFn()
    expect(mockFn.mock.results).toEqual([
      { type: 'return', value: 'ok' },
      { type: 'return', value: 'ng' },
      { type: 'return', value: 'ok' },
    ])
  })
})
