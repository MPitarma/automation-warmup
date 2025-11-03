import test, { expect } from "@playwright/test";
import { USERS, MESSAGES } from "./data/loginData";
import { users } from "./data/loginData.json";
import { beforeEach } from "node:test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test("Login successful", async ({ page }) => {
  test.step("Write login info and click submit", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(process.env.SUCCESSFUL_LOGIN_USERNAME);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(process.env.SUCCESSFUL_LOGIN_PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();
  });

  //   test.step("Exepct success message to be visible", async () => {
  //     await expect(page.getByText("User successfully logged in!")).toBeVisible();
  //   });
  await expect(
    page.getByText(MESSAGES.successfulLoginMessage)
  ).toBeVisible();
});

test("Login - blocked account", async ({ page }) => {
  test.step("Write login info and click submit", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(process.env.BLOCKED_ACCOUNT_USERNAME);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(process.env.BLOCKED_ACCOUNT_PASSWORD);
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
      .fill(process.env.INVALID_USER_USERNAME);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(process.env.INVALID_USER_PASSWORD);
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
      .fill(process.env.WRONG_PAASSWORD_USERNAME);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(process.env.WRONG_PAASSWORD_PASSWORD);
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
      .fill(process.env.WRONG_PAASSWORD_USERNAME);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(process.env.WRONG_PAASSWORD_PASSWORD);
    for (let index = 0; index < 3; index++) {
      await page.getByRole("button", { name: "Login" }).click();
    }
  });
  //   test.step("Expect blocked user message to be visible", async () => {
  //     await expect(page.getByText("User temporarily blocked!")).toBeVisible();
  //   });
  await expect(
    page.getByText(MESSAGES.wrongPassword3timesMessage)
  ).toBeVisible();
});