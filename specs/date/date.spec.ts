const getNow = (): Date => {
  return new Date()
}

describe('Date', () => {
  describe('useFakeTimers', () => {
    beforeAll(() => {
      jest.useFakeTimers('modern')
    })
    afterAll(() => {
      jest.useRealTimers()
    })

    it('should return 2000-01-01', () => {
      jest.setSystemTime(new Date('2020-01-01'))
      expect(getNow().getTime()).toBe(new Date('2020-01-01').getTime())
    })
  })
})
