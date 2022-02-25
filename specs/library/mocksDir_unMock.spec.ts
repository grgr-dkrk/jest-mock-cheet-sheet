jest.enableAutomock()
jest.unmock('./mocksDir_module')
import myModule from './mocksDir_module'

describe('__mocks__', () => {
  it('should return foo', () => {
    expect(myModule().sayHello()).toBe('hello')
  })
})
