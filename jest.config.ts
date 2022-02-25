export default {
  clearMocks: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
}
