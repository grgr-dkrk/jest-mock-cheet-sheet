jest.enableAutomock()
import myModule from './mocksDir_module'

describe('__mocks__', () => {
  it('should return foo', () => {
    expect(myModule().sayHello()).toBe('foo')
  })
})
