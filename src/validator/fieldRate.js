module.exports = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;

    if (!watchedAt) {
        res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }

    const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if (!isFormatDate.test(watchedAt)) {
        res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
};

// regex da data retirado do gabarito do dia 04