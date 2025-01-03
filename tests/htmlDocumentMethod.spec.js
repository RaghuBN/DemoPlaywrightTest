import { test, expect } from '@playwright/test';

test.describe('Example to demonstrate execution of HTML Document methods in Playwright', () => {

    test('Extract innerText and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        test.setTimeout(60000);
        var locator = await page.evaluate(() =>
            document.querySelector('h1').innerText)
        await expect(locator).toEqual('Welcome to the-internet')
        
    })

    test('Get the current URL and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        test.setTimeout(60000);
        await page.locator('text=A/B Testing').click()
        var url = await page.evaluate(() => document.URL)
        await expect(url).toEqual('https://the-internet.herokuapp.com/abtest')
    })

    test('Count the total number of images and assert', async ({ page }) => {
        await page.goto('https://pixabay.com/')
        test.setTimeout(60000);
        var length = await page.evaluate(() => document.images.length)
        await expect(length).toEqual(37)
        
    })

    test('Get the Tag Name and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login')
        test.setTimeout(60000);
        var tagName = await page.evaluate(() =>
            document.getElementById('username').tagName)
        await expect(tagName).toEqual('INPUT')
        
    })

})