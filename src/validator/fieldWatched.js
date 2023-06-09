function fieldWatched(req, res, next) {
    const { talk: { watchedAt } } = req.body;
    const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
   
    if (!watchedAt) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }

    if (!isFormatDate.test(watchedAt)) {
        return res.status(400).json(
            { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
        );
    }
    return next();
}
module.exports = fieldWatched;
// regex da data retirado do gabarito do dia 04