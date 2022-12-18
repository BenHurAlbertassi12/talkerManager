// const express = require('express');
const path = require('path');

const talkerJsonPath = path.resolve('./src/talker.json');
const fs = require('fs').promises;

const readFile = async () => {
    try {
        const DARA = await fs.readFile(talkerJsonPath);
        return JSON.parse(DARA);
    } catch (error) {
        console.error(`Arquivo não pôde ser lido: ${error}`);
    }
};

const search = async (req, res) => {
      try {
        const { q } = req.query;
          const talkerJson = await readFile();

    if (q) {
        const filterTalkers = talkerJson.filter((element) => element.name.includes(q));
        return res.status(200).json(filterTalkers);
    }
          return res.status(200).json(talkerJson);
  } catch (err) {
   return res.status(400).send({ message: err.message });
  }
};
module.exports = { search };

// requisito 8 resolvido pelo gabarito da aula do dia 02, praticamente segui o que diz o course