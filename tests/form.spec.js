import { test, expect } from "@playwright/test";
import { USERS, MESSAGES } from "./data/formData";

const users = USERS;

test.describe("FORMS", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/form");
    await expect(page.getByRole("heading", { name: "Form" })).toBeVisible();
  });

  users.forEach((user) => {
    test(`${user.scenario}`, async ({ page }) => {
      await test.step("Fill form and submit", async () => {
        await page
          .getByRole("textbox", { name: "Name *" })
          .fill(`${user.name}`);

        await page
          .getByRole("textbox", { name: "Email *" })
          .fill(`${user.email}`);

        await page
          .getByRole("textbox", { name: "Password *" })
          .fill(`${user.password}`);

        await page.getByLabel("Country *").selectOption(`${user.country}`);
        await page
          .getByRole("radio", { name: `${user.gender}`, exact: true })
          .check();

        for (const hobby of user.hobbies || []) {
          await page.getByRole("checkbox", { name: hobby }).check();
        }

        await page.getByRole("button", { name: "Send" }).click();
      });

      await test.step("Validate success", async () => {
        await expect(page.getByText(MESSAGES.title)).toBeVisible();
        await expect(page.getByText(MESSAGES.description)).toBeVisible();
      });
    });
  });

  test("Error messages", async ({ page }) => {
    await test.step("Trigger error messages", async () => {
      await page.goto("/form");
      await page.getByRole("button", { name: "Send" }).click();
    });

    await test.step("Validate error messages", async () => {
      await expect(page.getByText(MESSAGES.nameRequiredMessage)).toBeVisible();
      await expect(
        page.getByText(MESSAGES.emailRequiredMessage)
      ).toBeVisible();
      await expect(
        page.getByText(MESSAGES.passwordRequiredMessage)
      ).toBeVisible();
      await expect(
        page.getByText(MESSAGES.countryRequiredMessage)
      ).toBeVisible();
      await expect(
        page.getByText(MESSAGES.genderRequiredMessage)
      ).toBeVisible();
    });
  });
});
