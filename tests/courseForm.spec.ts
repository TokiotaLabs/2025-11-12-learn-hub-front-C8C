import { test, expect } from '@playwright/test';

test.describe('Course Form Spec:', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + '/courses');
  });

  test('should create a new course and open the modal and close and go to courses pages', async ({ page, baseURL }) => {
    await page.goto(baseURL + '/new');
    await page.fill('#title', 'Curso de React Playwright');
    await page.fill('#description', 'Aprende React desde cero:::');
    await page.fill('#startDate', '2023-12-01');
    await page.fill('#endDate', '2023-12-31');
    await page.fill('#duration', '30');
    await page.fill('#price', '100');
    await page.fill('#prerequisites', 'Conocimientos básicos de JavaScript');
    await page.fill('#instructorId', 'c7d42d4c-9ac4-49b0-8ea4-9644c045c94c');
    await page.selectOption('#modality', 'Online');
    await page.fill('#includedMaterials', 'Apuntes y ejercicios prácticos');
    await page.fill('#certification', 'Certificado de finalización');
    await page.fill('#availableSeats', '20');
    await page.fill('#location', 'Online');
    await page.fill('#category', 'Programación');

    await page.click('button[type="submit"]');

    const formTitleModal = await page.textContent('h3');
    expect(formTitleModal).toBe('My Modal');

    await page.locator('button:has-text("Ok")').click();

    const titleCourses = await page.textContent('h1');
    expect(titleCourses).toBe('Course Catalog');
  });
});
