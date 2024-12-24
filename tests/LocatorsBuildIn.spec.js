const { test, expect } = require('@playwright/test');

test('PlayWright Locators Test', async ({page}) => {

await page.goto ('https://practicetestautomation.com/practice-test-login/');

 const logo = await page.getByAltText('Practice Test Automation');

 await expect(logo).toBeVisible();

});
