const { join } = require('path');
const fs = require('fs').promises;

const PATH_TALKER = './src/talker.json';

const newTalker = async (talker) => {
    try {
        const DB_TALKER = join(PATH_TALKER);
        await fs.writeFile(DB_TALKER, JSON.stringify(talker));
    } catch (error) {
        console.error('Erro ao salvar o arquivo', error.message);
    }
};

module.exports = newTalker;

// course dia 02 / gabaritos