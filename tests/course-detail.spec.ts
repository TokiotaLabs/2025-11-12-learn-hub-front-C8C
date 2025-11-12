import { test, expect } from '@playwright/test';

test.describe('Course Detail spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/courses/detail/1');
  });

  test('should display the course title and description', async ({ page }) => {
    const title = await page.textContent('h4');

    await expect(title).toBe('What You will Learn');
  });

  test('should display the course content sections', async ({ page }) => {
    const sections = await page.locator('h3');
    const countSection = await sections.count();

    await expect(countSection).toBeGreaterThan(0);
  });
});
