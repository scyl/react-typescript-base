module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>", "<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["./jestSetup.ts"],
  moduleNameMapper: {
    "\\.(scss|css)$": "<rootDir>/__mocks__/style-mock.js",
  },
  testEnvironment: "jsdom",
};
