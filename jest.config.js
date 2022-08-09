const nextJest = require("next/jest");
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
// Add any custom config to be passed to Jest
const customJestConfig = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/src/connectors/prisma/singleton.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/node_modules",
    "<rootDir>/src/__tests__/mocks",
  ],
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components/$1",
    "^@/containers(.*)$": "<rootDir>/src/containers/$1",
    "^@/prisma(.*)$": "<rootDir>/src/connectors/prisma/$1",
    "^@/models(.*)$": "<rootDir>/src//models/$1",
    "^@/pages(.*)$": "<rootDir>/src/pages/$1",
    "^@/utils(.*)$": "<rootDir>/src/utils/$1",
    "^@/mocks(.*)$": "<rootDir>/src/__tests__/mocks/$1",
  },
};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
