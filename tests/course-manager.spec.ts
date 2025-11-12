import { test, expect } from '@playwright/test';

test.describe('Course Manager Test:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/new');
  });

  test('should display the course manager title', async ({ page }) => {
    const formTitle = await page.textContent('h2');

    expect(formTitle).toBe('Crear Nuevo Curso');
  });
});
