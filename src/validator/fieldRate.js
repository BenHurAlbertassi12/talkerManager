function fieldRate(req, res, next) {
    const { talk: rate } = req.body;
    if (!rate) res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    if (!Number.isInteger(rate) || (rate <= 0 && rate >= 6)) {
        res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
next();
}
module.exports = fieldRate;