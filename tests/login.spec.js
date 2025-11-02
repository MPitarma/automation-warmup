// @ts-check
import test, { expect } from "@playwright/test";
import { USERS, MESSAGES } from "./data/loginData";
import { users } from "./data/loginData.json";
import { beforeEach } from "node:test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test("Login successful", async ({ page }) => {
  test.step("Write login info and click submit", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.successfulLogin.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.successfulLogin.password);
    await page.getByRole("button", { name: "Login" }).click();
  });

//   test.step("Exepct success message to be visible", async () => {
//     await expect(page.getByText("User successfully logged in!")).toBeVisible();
//   });
  await expect(page.getByText(MESSAGES.successfulLoginMessage)).toBeVisible();
});

test("Login - blocked account", async ({ page }) => {
  test.step("Write login info and click submit", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.blockedAccount.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.blockedAccount.password);
    await page.getByRole("button", { name: "Login" }).click();
  });

//   test.step("Exepct success message to be visible", async () => {
//     await expect(page.getByText("User blocked!")).toBeVisible();
//   });
    await expect(page.getByText(MESSAGES.blockedAccountMessage)).toBeVisible();
});

test("Login - invalid user", async ({ page }) => {
  test.step("Write login info and click submit", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.invalidUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.invalidUser.password);
    await page.getByRole("button", { name: "Login" }).click();
  });

//   test.step("Exepct user not found message to be visible", async () => {
//     await expect(page.getByText("User not found!")).toBeVisible();
//   });
  await expect(page.getByText(MESSAGES.invalidUserMessage)).toBeVisible();
});

test("Login - wrong password", async ({ page }) => {
  test.step("Write login info and click submit", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.wrongPassword.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.wrongPassword.password);
    await page.getByRole("button", { name: "Login" }).click();
  });

//   test.step("Expect incorrect or username message to be visible", async () => {
//     await expect(
//       page.getByText("Incorrect username or password!")
//     ).toBeVisible();
//   });
  await expect(
    page.getByText(MESSAGES.wrongPasswordMessage)
  ).toBeVisible();
});

test("Login - 3 wrong password blocks user", async ({ page }) => {
  test.step("Write login info and click submit", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill("test");
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.wrongPassword.password);
    for (let index = 0; index < 3; index++) {
      await page.getByRole("button", { name: "Login" }).click();
    }
  });
//   test.step("Expect blocked user message to be visible", async () => {
//     await expect(page.getByText("User temporarily blocked!")).toBeVisible();
//   });
  await expect(page.getByText(MESSAGES.wrongPassword3timesMessage)).toBeVisible();
});