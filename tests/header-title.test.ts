import { test, expect } from '@playwright/test';

test('header title test', async ({ page, baseURL }) => {
  await page.goto(baseURL + '/');

  const title = page.locator('.basis-auto');

  await expect(title).toHaveText('LearnHub');
});
