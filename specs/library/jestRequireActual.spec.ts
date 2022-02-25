jest.mock('uuid', () => {
  const __original = jest.requireActual('uuid')
  return {
    __esModule: true,
    ...__original,
    v5: jest.fn().mockImplementation(() => 'dummy-text'),
  }
})
import * as uuid from 'uuid'

const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341'

describe('path', () => {
  it('should return dummy-text', () => {
    expect(uuid.v5('Hello, World!', MY_NAMESPACE)).toBe('dummy-text')
  })
  it('should return resolve', () => {
    expect(uuid.v4()).not.toBe('dummy-text')
  })
})
