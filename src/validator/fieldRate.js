function fieldRate(req, res, next) {
    const { talk: { rate } } = req.body;
    if (!rate) { return res.status(400).json({ message: 'O campo "rate" é obrigatório' }); }
    if (!Number.isInteger(rate) || (rate <= 0 || rate >= 6)) {
        return res.status(400).json({
            message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    return next();
}
module.exports = fieldRate;