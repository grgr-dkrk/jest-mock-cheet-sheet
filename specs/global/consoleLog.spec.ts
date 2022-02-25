import { logs } from './consoleLog'

describe('consoleLog: global', () => {
  let __originalConsoleLog = global.console.log
  beforeAll(() => {
    console.log = jest.fn()
  })
  afterAll(() => {
    console.log = __originalConsoleLog
  })
  it('should return string args', () => {
    logs('ping', 'pong')
    expect(console.log).toBeCalledWith('logs:', 'ping', 'pong')
  })
})

describe('consoleLog: spy', () => {
  let spy: jest.SpyInstance
  beforeAll(() => {
    spy = jest.spyOn(console, 'log').mockImplementation()
  })
  afterAll(() => {
    spy.mockRestore()
  })
  it('should return string args', () => {
    logs('ping', 'pong')
    expect(spy).toBeCalledWith('logs:', 'ping', 'pong')
  })
  it('should called 2 times', () => {
    logs('')
    expect(spy).toBeCalledTimes(2)
  })
  it('should called 0 times', () => {
    spy.mockRestore()
    expect(spy).toBeCalledTimes(0)
  })
})
