const { test, expect } = require('@playwright/test');

test('Validate page title and URL', async ({ page }) => {
  // Navigate to the target URL
  await page.goto('https://www.hollandandbarrett.com/'); 

  // Get the actual page title
  const actualTitle = await page.title();

  // Get the actual URL
  const actualURL = page.url();

  // Expected values
  const expectedTitle = "Holland & Barrett - UK's Leading Health & Wellbeing Store134"; 
  const expectedURL = 'https://www.hollandandbarrett.com/'; 

  // Assertions
  expect(actualTitle).toBe(expectedTitle);
  expect(actualURL).toBe(expectedURL); 
});