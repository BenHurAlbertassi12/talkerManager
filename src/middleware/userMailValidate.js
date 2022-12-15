const userMailValidate = (req, res, next) => {
    const { email } = req.body;

    const emailValido = /\S+@\S+\.\S+/;

    if (!email) {
        res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!emailValido.test(email)) {
        res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

module.exports = userMailValidate;

// https://horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
// sofrido mas consegui fazer a validação do email