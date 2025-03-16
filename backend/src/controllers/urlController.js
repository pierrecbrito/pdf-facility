const {convertUrlToPdf} = require('../services/puppeteer');
const supabase = require('../config/supabase');

exports.convertUrlToPdf = async (req, res) => {
    const {url} = req.body;
    const userId = req.user.id

    if (!url || !url.startsWith('http')) {
        return res.status(400).json({error: 'Valid URL is required'});
    }

    try {
        const pdfBase64 = await convertUrlToPdf(url);

        const { data, error } = await supabase.from('url-conversions').insert([
                {user_id: userId, url: url, pdf_base64: pdfBase64}
            ]);

        if (error) {
            console.error('Supabase insert error:', error);
            return res.status(500).json({ error: 'Failed to register conversion in Supabase' });
        }

        res.status(200).json({
            pdf: pdfBase64
        });
    } catch (error) {
        console.error('convertUrlToPdf error:', error);
        res.status(500).json({error: 'Failed to convert URL to PDF'});
    }
}