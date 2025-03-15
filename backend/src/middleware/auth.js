const supabas = require('../supabase');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { data: {user}, error } = await supabase.auth.api.getUser(token);
    if (error) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user;
    next();
}