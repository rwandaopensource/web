module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(js|json|jsx)',
    '!<rootDir>node_modules'
  ],
  "coverageReporters": [
    "lcov",
    "json",
    "text",
    "html"
  ],
  rootDir: './',
  testMatch: [
    '<rootDir>/src/**/**/*.(spec|test).js',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'file-loader',
    '\\.scss$': 'sass-loader'
  }
};
