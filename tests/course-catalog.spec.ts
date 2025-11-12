import { test, expect } from '@playwright/test';

test.describe('Course Catalog spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/courses');
  });

  test('should display the course catalog header', async ({ page }) => {
    const title = await page.textContent('h1');

    expect(title).toBe('Course Catalog');
  });

  test('should display the course catalog main', async ({ page }) => {
    const title = await page.textContent('h2');

    expect(title).toBe('Available Courses');
  });

  test('should display the course catalog footer', async ({ page }) => {
    const title = await page.textContent('h4');

    expect(title).toBe('Emily Johnson');
  });
});
