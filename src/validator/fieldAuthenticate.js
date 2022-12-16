module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) res.status(400).json({ message: 'Token não encontrado' });
    if (authorization.length !== 16) res.status(400).json({ message: 'Token inválido' });
    next();
    };
