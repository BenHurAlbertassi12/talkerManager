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

const fieldAuthenticate = require('../validator/fieldAuthenticate');
const fieldName = require('../validator/fieldName');
const fieldAge = require('../validator/fieldAge');
const fieldTalk = require('../validator/fieldWatched');
const fieldRate = require('../validator/fieldRate');
const fieldWatched = require('../validator/fieldWatched');
const newTalker = require('../middleware/newTalker');

router.post(
    '/',
    fieldAuthenticate,
    fieldName,
    fieldAge,
    fieldTalk,
    fieldWatched,
    fieldRate,
    async (req, res) => {
        const talker = req.body;

        const talkers = await talkerRead();

        const newTalkersWithId = { id: talkers.length + 1, ...talker };

        talkers.push(newTalkersWithId);

        await newTalker(talkers);

        return res.status(201).json(newTalkersWithId);
    },
);

router.delete('/:id', fieldAuthenticate, (req, res) => {
    const id = Number(req.params.id);
    const dbTalker = talkerRead.find((t) => t.id === id);
    const index = dbTalker.indexOf(dbTalker);
    newTalker.splice(index, 1);
    res.sendStatus(200);
});

module.exports = router;

// código estava dando o mesmo erro do colega Paulo Ferreira
// https://trybecourse.slack.com/archives/C02T5FNGN07/p1660591463007539
// basicamente coloquei return em todos os validators e consegui avançar no código