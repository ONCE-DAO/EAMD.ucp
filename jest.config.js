/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: 'tsconfigJest.json',
    },
  },
  transform: {
    ".m?ts": "ts-jest",
  },
  resolver: "./Scenarios/localhost/tla/EAM/Once/dev/1_infrastructure/jestResolver.cjs",
  testRegex: "\\.(test)\\.m?ts$",
  moduleFileExtensions: ["js", "mjs", "mts"],
  extensionsToTreatAsEsm: [".mts"],
  transformIgnorePatterns: ["/node_modules/", "/dist/"],
  testPathIgnorePatterns: ["3rdParty"],
  setupFilesAfterEnv: ["@alex_neo/jest-expect-message"],
};
