module.exports = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name <= 2) {
        return res.status(400).json({ message: 'O "name" deve pelo menos 3 caracteres' });
    }
    return next();
};