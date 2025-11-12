import { test, expect } from '@playwright/test';

test.describe('Course Detail spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/course-detail/1');
  });

  test('should display the course title and description', async ({ page }) => {
    const title = await page.textContent('h1');
    expect(title).toBe('Introduction to JavaScript');

    const description = await page.textContent('p');
    expect(description).toContain('Learn the basics of JavaScript');
  });

  test('should display the course content sections', async ({ page }) => {
    const sections = await page.locator('h3');
    await expect(sections).toHaveCountGreaterThan(0);
  });

  test('should allow user to enroll in the course', async ({ page }) => {
    await page.click('button:has-text("Enroll Now")');
    // Check for a success message or redirection
    await expect(page).toHaveURL(/.*\/enrolled/);
  });
});
