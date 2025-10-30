// @ts-check
import test,  { expect } from "@playwright/test";
import {USERS} from './data/loginData';
import {users} from './data/loginData.json';

test("Login successful", async ({ page }) => {
  await page.goto('/login');
  await page.getByRole('textbox', {name: 'Type your username'}).fill(USERS.successfulLogin.username);
  await page.getByRole('textbox', {name: 'Type your password'}).fill(USERS.successfulLogin.password);
  await page.getByRole('button', {name: 'Login'}).click();
  await expect(page.getByText('User successfully logged in!')).toBeVisible();
});

test('Login - blocked account', async ({page})=>{
    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill(USERS.blockedAccount.username);
    await page.getByRole('textbox', {name: 'Type your password'}).fill(USERS.blockedAccount.password);
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('User blocked!')).toBeVisible();
});

test('Login - invalid user', async ({page})=>{
    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill(USERS.invalidUser.username);
    await page.getByRole('textbox', {name: 'Type your password'}).fill(USERS.invalidUser.password);
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('User not found!')).toBeVisible();
});

test('Login - wrong password', async ({page})=>{
    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill(USERS.wrongPassword.username);
    await page.getByRole('textbox', {name: 'Type your password'}).fill(USERS.wrongPassword.password);
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Incorrect username or password!')).toBeVisible();
});

test('Login - 3 wrong password blocks user', async ({page})=>{
    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill('test');
    await page.getByRole('textbox', {name: 'Type your password'}).fill(USERS.wrongPassword.password);
    for (let index = 0; index < 3; index++) {
        await page.getByRole('button', {name: 'Login'}).click();
    }
    await expect(page.getByText('User temporarily blocked!')).toBeVisible();
});


