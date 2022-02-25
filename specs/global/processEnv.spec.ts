import { getServerPath } from './processEnv'

describe('process.env', () => {
  const __ORIGINAL_ENV = process.env

  afterEach(() => {
    process.env = __ORIGINAL_ENV
  })

  it('should be return production server path', () => {
    process.env = { ...__ORIGINAL_ENV, ENVIRONMENT: 'production' }
    expect(getServerPath()).toBe('https://example.com/')
  })

  it('should be return develop server path', () => {
    process.env = { ...__ORIGINAL_ENV, ENVIRONMENT: 'develop' }
    expect(getServerPath()).toBe('http://localhost:3000')
  })
})
