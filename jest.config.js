/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
}
