import { test, expect } from '@playwright/test';

test.describe('Home spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/');
  });

  test('should have the title of the page', async ({ page }) => {
    const title = await page.textContent('h1');

    await expect(title).toBe('Unlock Your Potential');
  });

  test('should have the title of the link to explore courses', async ({
    page,
  }) => {
    const exploreCoursesLink = await page.locator('text=Explore Courses');

    await expect(exploreCoursesLink).toBeVisible();
    await exploreCoursesLink.click();
  });
});
