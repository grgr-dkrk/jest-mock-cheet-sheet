export const getServerPath = () =>
  process.env.ENVIRONMENT === 'production'
    ? 'https://example.com/'
    : 'http://localhost:3000'
