const {convertUrlToPdf} = require('../services/puppeteer');

exports.convertUrlToPdf = async (req, res) => {
    const {url} = req.body;

    if (!url || !url.startsWith('http')) {
        return res.status(400).json({error: 'Valid URL is required'});
    }

    try {
        const pdfBase64 = await convertUrlToPdf(url);

        res.status(200).json({
            pdf: pdfBase64
        });
    } catch (error) {
        console.error('convertUrlToPdf error:', error);
        res.status(500).json({error: 'Failed to convert URL to PDF'});
    }
}