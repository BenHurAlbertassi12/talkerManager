const express = require('express');

const router = express.Router();

const { talkerRead } = require('../middleware/talkerRead');

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

const { fieldAge } = require('../validator/fieldAge');
const { fieldName } = require('../validator/fieldName');
const { fieldRate } = require('../validator/fieldRate');
const { fieldTalk } = require('../validator/fieldWatched');
const { fieldWatched } = require('../validator/fieldWatched');
const { newTalker } = require('../middleware/newTalker');
const { fieldAuthenticate } = require('../validator/fieldAuthenticate');

router.post('/talker',
    fieldAge,
    fieldAuthenticate,
    fieldName,
    fieldRate,
    fieldTalk,
    fieldWatched,
    async (req, res) => {
        const BODY_TALKER = req.bodyParser;
        const READ_TALKER = await talkerRead();
        const ID_TALKER = { id: READ_TALKER.length + 1, ...BODY_TALKER };
        READ_TALKER.push(ID_TALKER);
        await newTalker(READ_TALKER);
        res.status(201).json(ID_TALKER);
    });

module.exports = router;
