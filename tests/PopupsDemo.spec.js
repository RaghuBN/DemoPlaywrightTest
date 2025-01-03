const { test, expect } = require('@playwright/test');

test('Handling Popups', async ({ page }) => {
  //const browser = await chromium.launch({ headless: false });
  //const page = await browser.newPage();

  // add something to cart
  await page.goto('https://web-scraping.dev/product/1');
  await page.click('.add-to-cart');

  // clear out the cart to trigger the popup event
  await page.goto('https://web-scraping.dev/cart');
  await page.waitForSelector('.cart-full .cart-item');
  await page.click("(//button[contains(text(),'Clear')])[2]");
  await page.waitForTimeout(5000);
  
  //await browser.close();
});