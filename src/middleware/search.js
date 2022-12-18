// const express = require('express');
const path = require('path');

const moviesPath = path.resolve('./src/talker.json');
const fs = require('fs').promises;

const readFile = async () => {
    try {
        const data = await fs.readFile(moviesPath);
        return JSON.parse(data);
    } catch (error) {
        console.error(`Arquivo não pôde ser lido: ${error}`);
    }
};

const search = async (req, res) => {
      try {
        const { q } = req.query;
          const movies = await readFile();

    if (q) {
        const filteredMovies = movies.filter((element) => element.name.includes(q));
        return res.status(200).json(filteredMovies);
    }
          return res.status(200).json(movies);
  } catch (err) {
   return res.status(400).send({ message: err.message });
  }
};
module.exports = { search };

// requisito 8 resolvido pelo gabarito da aula do dia 02, praticamente segui o que diz o course