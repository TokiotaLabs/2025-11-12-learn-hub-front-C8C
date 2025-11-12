import { test, expect } from '@playwright/test';

test.describe('Course Manager spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/new');
  });

  test('should display the course manager form', async ({ page }) => {
    const formTitle = await page.textContent('h2');

    expect(formTitle).toBe('Crear Nuevo Curso');
  });

  test('should allow user to fill and submit the course form', async ({
    page,
  }) => {
    await page.fill('input[name="title"]', 'Advanced TypeScript');
    await page.fill(
      'textarea[name="description"]',
      'Learn advanced TypeScript concepts.'
    );
    await page.click('button[type="submit"]');

    // await expect(page).toHaveURL(/.*\/courses/);
  });
});
