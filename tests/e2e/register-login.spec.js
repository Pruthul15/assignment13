// tests/e2e/register-login.spec.js
const { test, expect } = require('@playwright/test');

const URL = 'http://localhost:8000';

test.describe('User Auth Flows', () => {
  let createdUsername;
  let createdPassword;

  test('Loads registration page', async ({ page }) => {
    await page.goto(`${URL}/register`);
    await expect(page.locator('h2:text("Create Account")')).toBeVisible();
  });

  test('Registration with valid data succeeds', async ({ page }) => {
    await page.goto(`${URL}/register`);
    const unique = Date.now();
    createdUsername = `jsauthtestuser${unique}`;
    createdPassword = 'StrongPassw0rd!';
    await page.fill('input[name="username"]', createdUsername);
    await page.fill('input[name="email"]', `jsauthtest${unique}@example.com`);
    await page.fill('input[name="first_name"]', 'John');
    await page.fill('input[name="last_name"]', 'Tester');
    await page.fill('input[name="password"]', createdPassword);
    await page.fill('input[name="confirm_password"]', createdPassword);
    await page.click('button[type="submit"]');
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
    // Use user from registration test
    await page.goto(`${URL}/login`);
    await page.fill('input[name="username"]', createdUsername);
    await page.fill('input[name="password"]', createdPassword);
    await page.click('button[type="submit"]');
    // Use redirect or success message as your flow dictates
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Login with wrong password shows error', async ({ page }) => {
    await page.goto(`${URL}/login`);
    await page.fill('input[name="username"]', createdUsername);
    await page.fill('input[name="password"]', 'WrongPassword1!');
    await page.click('button[type="submit"]');
    await expect(page.locator('span#errorMessage')).toBeVisible({ timeout: 3000 });
    // Match error string to your backend output exactly!
    await expect(page.locator('span#errorMessage')).toContainText('Invalid username or password');

  });
});
