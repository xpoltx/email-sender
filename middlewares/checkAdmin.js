export default (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(404).json({ message: 'No existing user' });
        }

        if (req.user.role !== 'admin') {
            return res.status(500).json({
                message: 'User dont have permissions',
            });
        }

        next();
    } catch (error) {
        return res.json(error);
    }
};