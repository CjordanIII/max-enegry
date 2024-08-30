// src/example.e2e.js
const { test, expect } = require("@playwright/test");

test("should navigate to the correct page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.close("This is just to test");
});
