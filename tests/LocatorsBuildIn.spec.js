const { test, expect } = require('@playwright/test');

test('AltText Test', async ({page}) => {

     await page.goto ('https://practicetestautomation.com/practice-test-login/');

     const logo = await page.getByAltText('Practice Test Automation');

     await expect(logo).toBeVisible();

});

test('Placeholder Test', async ({page}) => {

    await page.goto ('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    
    await page.getByPlaceholder('Search').fill("Playwright");
    
});
    

test('Role Test', async ({page}) => {

    await page.goto ('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

   // Interact with an element by role
  // Example 1: Click a button with role 'button'
  await page.getByRole('button', { name: 'Submit' }).click();

  // Example 2: Find a link with role 'link'
  await page.getByRole('link', { name: 'Learn More' }).click();
    
});
    