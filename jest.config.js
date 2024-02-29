module.exports = {
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.ts$",
  restoreMocks: true,
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
  rootDir: "src",
};
