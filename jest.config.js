module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}'
  ],
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: [ '<rootDir>/tests/unit/index.js' ],
}
