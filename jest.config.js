module.exports = {
  testPathIgnorePatterns: [
    '/dist/',
    '/node_modules/',
  ],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
