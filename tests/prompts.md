## 🧪 Example: More Specific Prompt
// Use Playwright to test the login flow on https://example.com
// Steps:
// 1. Go to https://example.com
// 2. Click on the "Login" button in the top right corner
// 3. Enter "testuser@example.com" into the email field
// 4. Enter "password123" into the password field
// 5. Click the "Sign In" button
// 6. Wait for the dashboard to load
// 7. Assert that the heading "Welcome, Test User!" is visible

## Can you write a Playwright test that:
*Navigates to http://localhost:5173/new
*Fill all the inputs required inside courseForm
*Click the submit button
*Asset the createCourse is called

## You are an expert in TypeScript, Frontend development, and Playwright end-to-end testing.
You write concise, technical TypeScript code with accurate examples and the correct types.

- Always use the recommended built-in and role-based locators (getByRole, getByLabel, etc.)
- Prefer to use web-first assertions whenever possible
- Use built-in config objects like devices whenever possible
- Avoid hardcoded timeouts
- Reuse Playwright locators by using variables
- Follow the guidance and best practices described on playwright.dev
- Avoid commenting the resulting code

### Response o1 (Preview)
import { test, expect } from '@playwright/test';

test('should create a new course', async ({ page }) => {
  await page.route('**/api/courses', (route) => {
    route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
  });

  await page.goto('http://localhost:5173/new');
  await page.fill('#title', 'My Course');
  await page.fill('#description', 'Description here');
  await page.fill('#startDate', '2024-01-01');
  await page.fill('#endDate', '2024-01-31');
  await page.fill('#duration', '20');
  await page.fill('#price', '150');
  await page.fill('#prerequisites', 'None');
  await page.fill('#instructor', 'John Doe');
  await page.selectOption('#modality', 'Online');
  await page.fill('#includedMaterials', 'Slides and projects');
  await page.fill('#certification', 'Certificate provided');
  await page.fill('#availableSeats', '25');
  await page.fill('#location', 'Remote');
  await page.fill('#category', 'Development');

  await page.click('button[type="submit"]');

  const [request] = await Promise.all([
    page.waitForRequest('**/api/courses'),
    page.waitForResponse('**/api/courses'),
  ]);
  expect(request.method()).toBe('POST');
});



### Response o3 Mini
import { test, expect } from '@playwright/test';

test('should create a new course', async ({ page }) => {
  // Mock the createCourse API call
  await page.route('**/api/courses', (route) => {
    route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
  });

  // Navigate to the form page
  await page.goto('http://localhost:5173/new');

  // Fill all the required inputs in the course form
  await page.fill('#title', 'My Course');
  await page.fill('#description', 'Description here');
  await page.fill('#startDate', '2024-01-01');
  await page.fill('#endDate', '2024-01-31');
  await page.fill('#duration', '20');
  await page.fill('#price', '150');
  await page.fill('#prerequisites', 'None');
  await page.fill('#instructor', 'John Doe');
  await page.selectOption('#modality', 'Online');
  await page.fill('#includedMaterials', 'Slides and projects');
  await page.fill('#certification', 'Certificate provided');
  await page.fill('#availableSeats', '25');
  await page.fill('#location', 'Remote');
  await page.fill('#category', 'Development');

  // Click the submit button
  await page.click('button[type="submit"]');

  // Assert that the createCourse API was called using the POST method
  const [request] = await Promise.all([
    page.waitForRequest('**/api/courses'),
    page.waitForResponse('**/api/courses'),
  ]);
  expect(request.method()).toBe('POST');
});

### Claude 3.5 Sonnet
import { test, expect } from '@playwright/test';

test('should create a new course successfully', async ({ page }) => {
  // Setup mock for API call
  await page.route('**/api/courses', route => {
    route.fulfill({
      status: 200,
      body: JSON.stringify({ success: true })
    });
  });

  // Navigate to new course page
  await page.goto('http://localhost:5173/new');

  // Fill required form fields
  const formData = {
    '#title': 'JavaScript Fundamentals',
    '#description': 'Learn JavaScript from scratch',
    '#startDate': '2024-01-01',
    '#endDate': '2024-03-01',
    '#duration': '60',
    '#price': '299',
    '#prerequisites': 'Basic programming knowledge',
    '#instructor': 'John Smith',
    '#includedMaterials': 'Course materials and exercises',
    '#certification': 'Professional Certificate',
    '#availableSeats': '30',
    '#location': 'Online',
    '#category': 'Programming'
  };

  // Fill all inputs
  for (const [selector, value] of Object.entries(formData)) {
    await page.fill(selector, value);
  }
  
  // Select modality
  await page.selectOption('#modality', 'Online');

  // Submit form and wait for API call
  const [request] = await Promise.all([
    page.waitForRequest('**/api/courses'),
    page.click('button[type="submit"]')
  ]);

  // Verify request
  expect(request.method()).toBe('POST');
  expect(await request.postData()).toContain('JavaScript Fundamentals');
});

### Claude 3.7 Sonnet
import { test, expect } from '@playwright/test';

test('should create a new course', async ({ page }) => {
  // Mock the API endpoint
  const mockCreateCourse = await page.route('**/api/courses', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true })
    });
  });

  // Navigate to the form page
  await page.goto('http://localhost:5173/new');
  
  // Prepare test data
  const courseData = {
    title: 'Advanced React',
    description: 'Learn advanced React techniques',
    startDate: '2024-06-15',
    endDate: '2024-07-15',
    duration: '40',
    price: '299',
    prerequisites: 'Basic React knowledge',
    instructor: 'Jane Smith',
    modality: 'Online',
    includedMaterials: 'Code examples and exercises',
    certification: 'Professional certification included',
    availableSeats: '25',
    location: 'Virtual',
    category: 'Development'
  };
  
  // Fill the form
  await page.getByLabel('Título del curso').fill(courseData.title);
  await page.getByLabel('Descripción').fill(courseData.description);
  await page.getByLabel('Fecha de inicio').fill(courseData.startDate);
  await page.getByLabel('Fecha de fin').fill(courseData.endDate);
  await page.getByLabel('Duración').fill(courseData.duration);
  await page.getByLabel('Precio').fill(courseData.price);
  await page.getByLabel('Requisitos previos').fill(courseData.prerequisites);
  await page.getByLabel('Instructor').fill(courseData.instructor);
  await page.getByLabel('Modalidad').selectOption(courseData.modality);
  await page.getByLabel('Materiales incluidos').fill(courseData.includedMaterials);
  await page.getByLabel('Certificación').fill(courseData.certification);
  await page.getByLabel('Número de plazas').fill(courseData.availableSeats);
  await page.getByLabel('Ubicación').fill(courseData.location);
  await page.getByLabel('Categoría').fill(courseData.category);

  // Submit the form and wait for network request
  const createCourseRequest = page.waitForRequest('**/api/courses');
  await page.getByRole('button', { name: 'Crear Curso' }).click();
  
  // Verify the API call
  const request = await createCourseRequest;
  expect(request.method()).toBe('POST');
  
  // Verify request payload contains course data
  const postData = JSON.parse(await request.postData() as string);
  expect(postData.title).toBe(courseData.title);
  expect(postData.category).toBe(courseData.category);
});


### Claude 3.7 Sonnet Thinking


### Gemini 2.0 Flash



### Response GTP-4a
import { test, expect } from '@playwright/test';

test('should create a new course', async ({ page }) => {
  // Mock the createCourse API call
  await page.route('**/api/course', (route) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify({ success: true }),
    });
  });

  // Navigate to the form page
  await page.goto('http://localhost:5173/new');

  // Fill all the inputs
  await page.fill('#title', 'Curso de React');
  await page.fill('#description', 'Aprende React desde cero');
  await page.fill('#startDate', '2023-12-01');
  await page.fill('#endDate', '2023-12-31');
  await page.fill('#duration', '30');
  await page.fill('#price', '100');
  await page.fill('#prerequisites', 'Conocimientos básicos de JavaScript');
  await page.fill('#instructor', 'Juan Pérez');
  await page.selectOption('#modality', 'Online');
  await page.fill('#includedMaterials', 'Apuntes y ejercicios prácticos');
  await page.fill('#certification', 'Certificado de finalización');
  await page.fill('#availableSeats', '20');
  await page.fill('#location', 'Online');
  await page.fill('#category', 'Programación');

  // Click the submit button
  await page.click('button[type="submit"]');

  // Assert the createCourse API was called
  const [request] = await Promise.all([
    page.waitForRequest('**/api/course'),
    page.waitForResponse('**/api/course'),
  ]);
  expect(request.method()).toBe('POST');
});



### Response chatGPT
// CourseForm.spec.tsx
import { test, expect } from '@playwright/experimental-ct-react';
import CourseForm from './CourseForm';

test('calls createCourse when form is submitted', async ({ mount }) => {
  const createCourse = test.fn();

  const component = await mount(
    <CourseForm createCourse={createCourse} />
  );

  await component.locator('input[name="title"]').fill('Test Course');
  await component.locator('input[name="description"]').fill('Awesome course');
  await component.locator('input[name="duration"]').fill('4 weeks');

  await component.locator('button[type="submit"]').click();

  expect(createCourse).toHaveBeenCalledTimes(1);
  expect(createCourse).toHaveBeenCalledWith({
    title: 'Test Course',
    description: 'Awesome course',
    duration: '4 weeks',
  });
});


# CONCLUSION
¿Quieres refactorizar código de Spaghetti Playwright en un modelo de objetos de página? ¡Sin problema, Copilot lo hace de maravilla!

¿Quieres generar datos de prueba? ¡Sencillo, Copilot te los entrega en segundos!

¿Quieres generar un conjunto de pruebas completo y de alta calidad? Creo que aún no lo hemos conseguido. 