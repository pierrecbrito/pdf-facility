const puppeteer = require('puppeteer');

exports.convertUrlToPdf = async (url) => {
    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        await page.goto(url, {
            waitUntil: 'networkidle2',
            timeout: 30000
        });

        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true
        });

        await browser.close();

        const pdfBase64 = pdfBuffer.toString('base64');

        return pdfBase64;
    } catch (error) {
        console.error('puppette error:', error);
        throw new Error('Failed to convert URL to PDF');
    }
}