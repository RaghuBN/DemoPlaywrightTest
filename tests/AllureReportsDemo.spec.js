import { test, expect } from '@playwright/test';

test.describe('Example to demonstrate File Upload in Playwright', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    })

    test('Handling JS Alert - Validate Alert Text and Click OK', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Alert');
            await dialog.accept()
        })
        await page.locator('text=Click for JS Alert').click()
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    })

    test('Handling JS Confirm - Validate Confirm Text and Click OK', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Confirm')
            await dialog.accept()
        })
        await page.locator('text=Click for JS Confirm').click()
        await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    })

    test('Handling JS Confirm - Validate Confirm Text and Click Cancel', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Confirm')
            await dialog.dismiss()
        })
        await page.locator('text=Click for JS Confirm').click()
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    })

    test('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', async ({ page }) => {
        page.on('dialog', async dialog => {
            expect(dialog.message()).toEqual('I am a JS prompt')
            await dialog.accept('Testersdock')
        })
        await page.locator('text=Click for JS Prompt').click()
        await expect(page.locator('#result')).toHaveText('You entered: Testersdock')
    })

    test('Capture screenshot of the visible window', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        await page.screenshot({ path: 'screenshot/visibleWindow.png' });
        test.setTimeout(60000);
    })

    test('Capture screenshot of the entire scrollable webpage', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        await page.screenshot({ path: 'screenshot/fullPage.png', fullPage: true });
        test.setTimeout(60000);
    })

    test('Capture screenshot of an element', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown')
        await page.locator('#dropdown').screenshot({ path: 'screenshot/elementScreenshot.png' });
        test.setTimeout(60000);
    })

    test('Automatically Capture screenshot when Test Fails ', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login')
        await expect(page.locator('#username')).toBeVisible({ timeout: 8000 })
        await page.fill('#username', 'tomsmith')
        await page.fill('#password', 'wrong-password')
        await page.click('button[type="submit"]')
        await expect(page.locator('div#flash')).toContainText('You logged into a secure area!')
    })

    test('Simple iframe - Input text in the text editor which is inside an iframe', async ({ page }) => {
        await page.goto('http://the-internet.herokuapp.com/iframe')
        const textarea = await page.frameLocator('#mce_0_ifr').locator('#tinymce')
        await textarea.fill('Testersdock.com')
        await expect(textarea).toHaveText('Testersdock.com')
    })

    test('Nested iframe - Assert texts from each iframes', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/nested_frames')

        const topframe = await page.frameLocator('[name="frame-top"]')
        const leftframebody = await topframe.frameLocator('[name="frame-left"]').locator('body')
        await expect(leftframebody).toHaveText('LEFT')

        const middleframebody = await topframe.frameLocator('[name="frame-middle"]').locator('body')
        await expect(middleframebody).toHaveText('MIDDLE')

        const rightframebody = await topframe.frameLocator('[name="frame-right"]').locator('body')
        await expect(rightframebody).toHaveText('RIGHT')

        const bottomframebody = await page.frameLocator('[name="frame-bottom"]').locator('body')
        await expect(bottomframebody).toHaveText('BOTTOM')
    })

})