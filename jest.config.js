module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ["./src/testSetup.ts"],
  modulePathIgnorePatterns: ["<rootDir>/lib/", "<rootDir>/node_modules"]
};