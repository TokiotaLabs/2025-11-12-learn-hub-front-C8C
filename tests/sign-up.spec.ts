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
    await page.fill('input[name="firstName"]', 'John Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    const fullNameInput = await page.getAttribute(
      'input[name="firstName"]',
      'value'
    );

    expect(fullNameInput).toBe('John Doe');
  });
});
