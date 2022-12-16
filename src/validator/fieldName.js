module.exports = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name <= 2) {
        res.status(400).json({ message: 'O "name" deve pelo menos 3 caracteres' });
    }
    next();
};