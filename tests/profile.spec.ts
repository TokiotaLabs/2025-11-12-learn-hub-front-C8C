import { test, expect } from '@playwright/test';

test.describe('Profile spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/profile');
  });

  test('should check the users name', async ({ page }) => {
    const userName = await page.textContent('h2');

    expect(userName).toBe('Emily Johnson');
  });

  test('should check the contact information', async ({ page }) => {
    const email = await page.textContent(
      'text=Email: emily.johnson@example.com'
    );

    expect(email).toBeTruthy();
  });

  test('should check the enrolled courses', async ({ page }) => {
    const enrolledCourses = await page.locator('text=JavaScript 101');

    await expect(enrolledCourses).toBeVisible();
  });
});
