const { test, expect } = require('@playwright/test');

test('Validate page title and URL', async ({ page }) => {
  // Navigate to the target URL
 await page.goto('https://www.hollandandbarrett.com/'); 

 const pageTitle = page.title();
 console.log("Page Title is :", pageTitle);

 await expect(page).toHaveTitle("Holland & Barrett - UK's Leading Health & Wellbeing Store");
 
 const pageURL = page.url();
 console.log("Page URL is :", pageURL);
 await expect(page).toHaveURL('https://www.hollandandbarrett.com/');

 await page.close();

});