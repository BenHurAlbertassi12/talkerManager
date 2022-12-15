module.exports = (req, res, next) => {
    const { mail } = req.body;

    if (!mail.includes('@') || !mail.endWitch('.com', '.com.br')) {
        return res.status(400).json(
            { message: 'O campo name é obrigatório' },
        );
    }
    if (mail.length <= 0) {
        return res.status(400).json(
            { message: 'O campo "email" é obrigatório' },
        ); 
    }
    if (!mail) {
        return res.status(400).json(
            { message: 'O campo "email" é obrigatório' },
        );
    }
    next();
};

// requisito retirado do course gabarito do dia 04 na parte 04