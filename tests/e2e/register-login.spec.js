// tests/e2e/register-login.spec.js
const { test, expect } = require('@playwright/test');

const URL = 'http://localhost:8000';

test.describe('User Auth Flows', () => {
  test('Loads registration page', async ({ page }) => {
    await page.goto(`${URL}/register`);
    await expect(page.locator('h2:text("Create Account")')).toBeVisible();
  });

  test('Registration with valid data succeeds', async ({ page }) => {
    await page.goto(`${URL}/register`);
    // Generate a unique username/email for every test run
    const unique = Date.now();
    await page.fill('input[name="username"]', `jsauthtestuser${unique}`);
    await page.fill('input[name="email"]', `jsauthtest${unique}@example.com`);
    await page.fill('input[name="first_name"]', 'John');
    await page.fill('input[name="last_name"]', 'Tester');
    await page.fill('input[name="password"]', 'StrongPassw0rd!');
    await page.fill('input[name="confirm_password"]', 'StrongPassw0rd!');
    await page.click('button[type="submit"]');
    // Registration redirects to login page after success
    await expect(page).toHaveURL(/\/login/);
  });

  test('Registration with short password shows error', async ({ page }) => {
    await page.goto(`${URL}/register`);
    const unique = Date.now();
    await page.fill('input[name="username"]', `shortpwuser${unique}`);
    await page.fill('input[name="email"]', `baduser${unique}@example.com`);
    await page.fill('input[name="first_name"]', 'Jane');
    await page.fill('input[name="last_name"]', 'Doe');
    await page.fill('input[name="password"]', '123');
    await page.fill('input[name="confirm_password"]', '123');
    await page.click('button[type="submit"]');
    await expect(page.locator('span#errorMessage')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('span#errorMessage')).toContainText('Password must be at least 8 characters');
  });

  test('Loads login page', async ({ page }) => {
    await page.goto(`${URL}/login`);
    await expect(page.locator('h2:text("Welcome Back")')).toBeVisible();
  });

  test('Login with correct credentials succeeds', async ({ page }) => {
    // You must use the *same* credentials as the last successful registration test,
    // or register a user in this test again if running tests independently.
    // For demo, just show fields for a known-valid user
    await page.goto(`${URL}/login`);
    await page.fill('input[name="username"]', 'jsauthtestuser'); // <-- Change if needed
    await page.fill('input[name="password"]', 'StrongPassw0rd!');
    await page.click('button[type="submit"]');
    await expect(page.locator('span#successMessage')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('span#successMessage')).toContainText('Login successful');
  });

  test('Login with wrong password shows error', async ({ page }) => {
    await page.goto(`${URL}/login`);
    await page.fill('input[name="username"]', 'jsauthtestuser');
    await page.fill('input[name="password"]', 'WrongPassword1!');
    await page.click('button[type="submit"]');
    await expect(page.locator('span#errorMessage')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('span#errorMessage')).toContainText('Invalid username or password');
  });
});
