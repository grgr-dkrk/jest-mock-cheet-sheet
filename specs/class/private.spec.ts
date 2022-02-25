class Person {
  private readonly __foo: string = 'bar'

  private __getSoftPrivateValue() {
    return this.__foo
  }

  #__getHardPrivateValue() {
    return this.__foo
  }

  getPrivateValue() {
    this.__getSoftPrivateValue()
    this.#__getHardPrivateValue()
    return this.__foo
  }
}

describe('Class:Private', () => {
  it('should __foo is "bar"', () => {
    const person = new Person()
    expect(person.getPrivateValue()).toBe('bar')
  })
  it('should __foo is "baz"', () => {
    const person = new Person()
    Object.defineProperty(person, '__foo', {
      value: 'baz',
    })
    expect(person.getPrivateValue()).toBe('baz')
  })
  it('__getSoftPrivateValue to be called', () => {
    const mockFn = jest.fn()
    const person = new Person()
    Object.defineProperty(person, '__getSoftPrivateValue', {
      value: mockFn,
    })
    person.getPrivateValue()
    expect(mockFn).toBeCalledTimes(1)
  })
  it('__getSoftPrivateValue return "baz"', () => {
    const mockFn = jest.fn()
    const person = new Person()
    Object.defineProperty(person, '__getSoftPrivateValue', {
      value: mockFn.mockReturnValueOnce('baz'),
    })
    person.getPrivateValue()
    expect(mockFn).lastReturnedWith('baz')
  })
  it.todo('#__getHardPrivateValue to be called')
  it.todo('#__getHardPrivateValue return "buz"')
})
