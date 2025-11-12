import { test, expect } from '@playwright/test';

test.describe('Sign-Up spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/sign-up');
  });

  test('should display the title form', async ({ page }) => {
    const formTitle = await page.textContent('h2');

    expect(formTitle).toBe('Registro de Usuario');
  });

  test('should allow user to fill and submit the form', async ({ page }) => {
    await page.fill('input[name="fullName"]', 'John Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    await expect(page.getByTestId('submit-register')).toHaveText('Submitted');
  });
});
