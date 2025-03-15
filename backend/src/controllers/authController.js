exports.checkAuth = (req, res) => {
    const {id, email, role} = req.user;
    res.status(200).json({
        user: {
            id,
            email, 
            role: role || 'user'
        }
    });
}