// @ts-check

/** @type {import('jest').Config} */
export default {
  verbose: true,
  transform: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  watchPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.git/"],
  testEnvironment: "node",
};
