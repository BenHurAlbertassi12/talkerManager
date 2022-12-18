const express = require('express');

const router = express.Router();

const { talkerRead } = require('../middleware/talkerRead');

const fieldAuthenticate = require('../validator/fieldAuthenticate');

const { search } = require('../middleware/search');

router.get('/', async (req, res) => {
    const DB_TALKER = await talkerRead();
    if (DB_TALKER.length) {
        res.status(200).json(DB_TALKER);
    } else {
        res.status(200).json([]);
    }
});

router.get('/search', fieldAuthenticate, search);

router.get('/:id', async (req, res) => {
    const DB_TALKER = await talkerRead();
    const DB_NAME = DB_TALKER.find(({ id }) => id === Number(req.params.id));
    // o buscador find do Course esta "findIndex" ele bugava a aplicação no requisito 2
    if (DB_NAME) {
        res.status(200).json(DB_NAME);
    } else {
        res.status(404).json({
            message: 'Pessoa palestrante não encontrada',
        });
    }
});

const fieldName = require('../validator/fieldName');
const fieldAge = require('../validator/fieldAge');
const fieldTalk = require('../validator/fieldTalk');
const fieldRate = require('../validator/fieldRate');
const fieldWatched = require('../validator/fieldWatched');
const newTalker = require('../middleware/newTalker');

router.post('/',
fieldName,
    fieldAuthenticate,
    fieldAge,
    fieldTalk,
    fieldWatched,
    fieldRate,
    async (req, res) => {
        const BODY_TALKER = req.body;
        const TALKER_READ = await talkerRead();
        const ID_TALKER = { id: TALKER_READ.length + 1, ...BODY_TALKER };
        TALKER_READ.push(ID_TALKER);
        await newTalker(TALKER_READ);
        return res.status(201).json(ID_TALKER);
    });

router.delete('/:id', fieldAuthenticate,
    async (req, res) => {
        const { id } = Number(req.params.id);
        
    const dbTalker = await talkerRead((t) => t.id === id);
    const index = dbTalker.indexOf(dbTalker);
    newTalker(index, 1);
    res.sendStatus(204);
    });

module.exports = router;

// código estava dando o mesmo erro do colega Paulo Ferreira
// https://trybecourse.slack.com/archives/C02T5FNGN07/p1660591463007539
// basicamente coloquei return em todos os validators e consegui avançar no código

// requisito 7 "delete", foi retirado do gabarito da aula do dia 04 exercício 2 e adaptado para o requisito