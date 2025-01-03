import { test, expect } from '@playwright/test';
const fs = require('fs')

test.describe('Example to demonstrate File Download in Playwright', () => {

    test('Download a Single file and assert', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/download')
        test.setTimeout(60000);

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('text=evening.jpg').click()
        ]);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'download/' + suggestedFileName
        await download.saveAs(filePath)
        expect(fs.existsSync(filePath)).toBeTruthy()
    })

    test('Download Multiple files and assert', async ({ page }) => {     
        await page.goto('https://the-internet.herokuapp.com/download')
        test.setTimeout(60000);
        const fileNames = ["C:/PlaywrightDemo/upload/evening.jpg", "C:/PlaywrightDemo/upload/morning.jpg"]
        for (const fileName of fileNames) {
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                page.locator(`text=${fileName}`).click()
            ]);
            const suggestedFileName = download.suggestedFilename()
            const filePath = 'download/' + suggestedFileName
            await download.saveAs(filePath)
            expect(fs.existsSync(filePath)).toBeTruthy()
        }
    })
})