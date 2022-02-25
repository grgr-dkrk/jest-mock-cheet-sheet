export default () => ({
  sayHello: jest.fn().mockImplementation(() => 'foo'),
})
