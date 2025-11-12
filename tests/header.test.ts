import { test, expect } from '@playwright/test';

test('basic test', async ({ page, baseURL }) => {
  await page.goto(baseURL + '/');

  const title = page.locator('LearnHub');

  await expect(title).toHaveText('LearnHub');
});
