// playwright.config.js
module.exports = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
  testDir: "src/playwright/e2e", // Directory where Playwright tests are located
  testMatch: "**/*.e2e.js", // Pattern to match test files
};
