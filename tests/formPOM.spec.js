import {test, expect} from "@playwright/test";
import { FormPage } from "./pages/form.page";
import {USERS, FORM_MESSAGES, ERROR_MESSAGES} from './data/forma.data.js';

for (const user of USERS) {
    test("FORM FILLING " + user.name, async ({ page }) => {
        const form = new FormPage(page);
      
        await form.navigateToFom();
        await form.fillName(user.name);
        await form.fillEmail(user.email);
        await form.fillPassword(user.password);
        await form.selectCountry(user.countryValue);
        await form.selectGender(user.genderValue);
        await form.selectHobbies(user.hobbies);
        await form.clickSend();

        await test.step("Validate success", async () => {
            await expect(page.getByText(FORM_MESSAGES.successTitle)).toBeVisible();
            await expect(page.getByText(FORM_MESSAGES.successBody)).toBeVisible();
          });
      });
};
