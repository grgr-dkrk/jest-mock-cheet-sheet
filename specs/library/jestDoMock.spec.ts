beforeEach(() => {
  jest.resetModules()
})

describe('jest.doMock', () => {
  it('should return dummy-string', async () => {
    jest.doMock('uuid', () => ({
      __esModule: true,
      v4: () => 'dummy-string',
    }))
    const uuid = await import('uuid')
    expect(uuid.v4()).toBe('dummy-string')
  })
  it('should return dummy-string again', async () => {
    const uuid = await import('uuid')
    expect(uuid.v4()).toBe('dummy-string')
  })
  it('should not return dummy-string', async () => {
    jest.dontMock('uuid')
    const uuid = await import('uuid')
    expect(uuid.v4()).not.toBe('dummy-string')
  })
})
