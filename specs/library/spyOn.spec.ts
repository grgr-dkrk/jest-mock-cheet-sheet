import axios from 'axios'

const getStatusCode = async (): Promise<number> => {
  try {
    const response = await axios.get('https://example.com/').catch(() => {
      throw new Error('fail to get')
    })
    return response.status
  } catch (err) {
    throw err
  }
}

describe('spyOn', () => {
  let spy: jest.SpyInstance
  afterEach(() => {
    spy.mockRestore()
  })
  it('should return response', async () => {
    spy = jest
      .spyOn(axios, 'get')
      .mockImplementationOnce(() => Promise.resolve({ status: 200 }))
    expect(await getStatusCode()).toBe(200)
  })
  it('should throw error', async () => {
    spy = jest
      .spyOn(axios, 'get')
      .mockImplementationOnce(() => Promise.reject())
    expect(() => getStatusCode()).rejects.toThrow('fail to get')
  })
})
