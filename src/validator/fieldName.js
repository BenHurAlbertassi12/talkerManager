module.exports = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length <= 2) {
        return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    return next();
};
// https://trybecourse.slack.com/archives/C03G5SRQSLE/p1671235924939189
// Colega rodrigo sakae me ajudou na resolução