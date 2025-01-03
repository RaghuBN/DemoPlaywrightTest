const { test, expect } = require('@playwright/test');

test('Assertions in Playwright', async ({ page }) => {
  //1.  The check page is navigated to the given URL
  await page.goto('https://practice.expandtesting.com/form-validation'); 
  await expect (page).toHaveURL('https://practice.expandtesting.com/form-validation')
  await page.waitForTimeout(5000);

  //2. Check the page has given the title
  await page.goto('https://playwright.dev/'); 
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
  
  //3. Check that the web element is visible. Here we can check logo element is visible
    await page.goto('https://playwright.dev/'); 
    const logoElement = await page.getByAltText('Playwright logo')
    await expect(logoElement).toBeVisible()
    await page.waitForTimeout(5000);

// 4. Check whether the element is enabled or disabled Here we can check username textfield is enabled
  await page.goto('https://practice.expandtesting.com/login');
  const userNameTextField = await page.locator('#username')
  await expect(userNameTextField).toBeEnabled()
  

// 5. Check whether the radio or checkbox button is checked
 await page.goto('https://practice.expandtesting.com/checkboxes');
 const checkBoxTwo =  await page.locator('#checkbox2')
 await expect(checkBoxTwo).toBeChecked()
 
// 6. Check element has an attribute
await page.goto('https://practice.expandtesting.com/inputs');
const inputNumber = await page.locator('#input-number')
await expect(inputNumber).toHaveAttribute('type', 'number')
await expect(inputNumber).toHaveAttribute('name', 'input-number')

// 7. Check element matches text
await page.goto('https://practice.expandtesting.com/Register')
const registerButton = await page.locator("button[type='submit']")
await expect(registerButton).toHaveText('Register')
await page.waitForTimeout(5000);

//8. Check elements contains text
// Check elements contains text - check partial value
await page.goto('https://practice.expandtesting.com/Register')
const registerButton1 = await page.locator("button[type='submit']")
await expect(registerButton).toContainText('Reg')
await page.waitForTimeout(5000);

//9. Check input has a value
  await page.goto('https://practice.expandtesting.com/inputs');
  const textField = await page.locator("#input-text")
  await textField.fill('Test')
  await expect(textField).toHaveValue('Test')
  await page.waitForTimeout(5000);


//  10. Checklist of elements has given length
await page.goto('https://practice.expandtesting.com/form-validation');
const paymentMethodOptions = await page.locator('select[name="payment"] option')   
await expect(paymentMethodOptions).toHaveCount(3)
await page.waitForTimeout(5000);

// 11. Negative Matchers
await page.goto('https://practice.expandtesting.com/form-validation');
await expect(page).not.toHaveTitle('Test')
await expect(page).not.toHaveURL('https://medium.com/')
await page.waitForTimeout(5000);

});
