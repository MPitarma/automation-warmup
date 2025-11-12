import { test } from "@playwright/test";
import hpCharacters from "./data/json/hpCharacters.json";
import { TablePage } from "./pages/table.page";


// for (const c of hpCharacters) {
//   test("Character " + c.name + " " + c.house, async ({ page }) => {
//     await page.goto("/table");

//     const nameWithoutSpaces = c.name.replace(" ", "");

//     await expect(
//       page.locator("#tableCharacterName" + nameWithoutSpaces)
//     ).toBeVisible();

//     await expect(page.getByRole("img", { name: c.name })).toBeVisible();

//     await expect(
//       page.locator("#tableCharacterHouse" + nameWithoutSpaces)
//     ).toBeVisible();

//     const birth = c.dateOfBirth ? c.dateOfBirth : "Unknown"

//     await expect(
//         page.getByRole("cell", { name: birth || null })
//       ).toBeVisible();
//   });
// }

test.describe('TABLE TESTS', () => {
    test.beforeEach(async ({ page }) => {
      const table = new TablePage(page);
      await table.navigateToTable();
    });
  
    for (const c of hpCharacters) {
      const title = `${c.name} | ${c.house || 'no-house'} | ${
        c.actor || 'no-actor'
      }`;
  
      test(`Validate character → ${title}`, async ({ page }) => {
        const table = new TablePage(page);
        await table.validateCharacterImage(c.name);
        await table.validatedNameAndHouse(c.name, c.house);
        await table.validateActor(c.actor);
        await table.validateDateOfBirth(c.dateOfBirth);
      });
    }
});