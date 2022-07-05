/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// Start once as Loader
// TODO maybe replace by testnodeonce
import  OnceKernel  from "./Scenarios/localhost/tla/EAM/Once/build/1_infrastructure/OnceKernel.class.mjs";
await OnceKernel.start();

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  "verbose": true,
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: 'tsconfig.json',
    },
  },
  transform: {
    ".m?ts": "ts-jest",
  },
  resolver: "./Scenarios/localhost/tla/EAM/Once/build/1_infrastructure/jestResolver.cjs",
  testRegex: "\\.(test)\\.m?ts$",
  moduleFileExtensions: ["js", "mjs", "mts"],
  extensionsToTreatAsEsm: [".mts"],
  transformIgnorePatterns: ["/node_modules/", "/dist/"],
  testPathIgnorePatterns: ["3rdParty"],
  setupFilesAfterEnv: ["@alex_neo/jest-expect-message"],
};
