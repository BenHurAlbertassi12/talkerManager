const express = require('express');

const ROUTER = express.Router();

// conteúdo course Dia 02 / Gabarito exercício
const fsPromises = require('fs').promises;
const path = require('path');

const JSON_TALKER = path.resolve('./src/talker.json');

async function talkerRead() {
    try {
        const DATA = await fsPromises.talkerRead(JSON_TALKER);
        return JSON.parse(DATA);
    } catch (error) {
        console.error(`Arquivo não pôde ser lido: ${error}`);      
    }
}

ROUTER.get('/', async (req, res) => {
    const DB_TALKER = await talkerRead();
    if (DB_TALKER.length) {
        res.status(200).json(DB_TALKER);
    } else {
        res.status(200).json([]);
    }
});