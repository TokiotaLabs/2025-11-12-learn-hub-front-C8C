import { test, expect } from '@playwright/test';

test.describe('Course Catalog spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/courses');
  });

  test('should display the course catalog title', async ({ page }) => {
    const title = await page.textContent('h1');
    expect(title).toBe('Course Catalog');
  });

  test('should display available courses', async ({ page }) => {
    const courseCards = await page.locator('.CourseCard');
    await expect(courseCards).toHaveCountGreaterThan(0);
  });

  test('should filter courses based on search input', async ({ page }) => {
    await page.fill('input[type="search"]', 'JavaScript');
    const filteredCourses = await page.locator(
      '.CourseCard:has-text("JavaScript")'
    );
    await expect(filteredCourses).toHaveCountGreaterThan(0);
  });
});
