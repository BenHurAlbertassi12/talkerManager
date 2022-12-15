const express = require('express');

const { talkerRead } = require('../middleware/readers');

const router = express.Router();

router.get('/', async (req, res) => {
    const DB_TALKER = await talkerRead();
    if (DB_TALKER.length) {
        res.status(200).json(DB_TALKER);
    } else {
        res.status(200).json([]);
    }
});
router.get('/:id', async (req, res) => {
    const DB_TALKER = await talkerRead();
    const DB_ID = DB_TALKER.find(({ id }) => id === Number(req.params.id));
    // o buscador find do Course esta "findIndex" ele bugava a aplicação no requisito 2
    if (DB_ID) {
        res.status(200).json(DB_ID);
    } else {
        res.status(404).json({
            message: 'Pessoa palestrante não encontrada',
        });
    }
});

module.exports = router;
