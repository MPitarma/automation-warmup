import { expect, test } from "@playwright/test";

export const nameWithoutSpaces = (name) => name.replace(" ", "");

export class TablePage {
  constructor(page) {
    this.page = page;
    this.imageByName = (name) => page.getByRole("img", { name: name });
    this.name = (name) =>
      page.locator("#tableCharacterName" + nameWithoutSpaces(name));
    this.house = (name) =>
      page.locator("#tableCharacterHouse" + nameWithoutSpaces(name));
    this.actor = (actor) => page.getByRole("cell", { name: actor });
    this.dateOfBirth = (dateOfBirth) =>
      page.getByRole("cell", { name: dateOfBirth });
  }

  async navigateToTable() {
    await test.step('Navigate to the Table page', async () => {
        await this.page.goto("/table");
      });
  }

  async validateCharacterImage(name) {
    await test.step(`Validation of the ${name}'s image`, async () => {
      const image = this.imageByName(name);
      await expect(image).toBeVisible();
    });
  }

  async validatedNameAndHouse(name, house) {
    await test.step(`Validation of character's name: ${name} and house: ${house}`, async () => {
      const charName = this.name(name);
      const houseName = this.house(name);
      await expect(charName).toHaveText(name);
      await expect(houseName).toHaveText(house);
    });
  }

  async validateActor(actor) {
    await test.step(`Validation of ${actor}'s name`, async () => {
      const actorName = this.actor(actor);
      await expect(actorName).toHaveText(actor);
    });
  }

  async validateDateOfBirth(dateOfBirth) {
    dateOfBirth = dateOfBirth ? dateOfBirth : "Unknown";
    await test.step(`Validate birth date contains: ${dateOfBirth}`, async () => {
      console.log(dateOfBirth);
      await expect(this.dateOfBirth(dateOfBirth)).toHaveText(dateOfBirth);
    });
  }
}
