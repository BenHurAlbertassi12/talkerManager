const fs = require('fs').promises;

const PATH_TALKER = './src/talker.json';

async function talkerRead() {
    try {
        const DATA = await fs.readFile(PATH_TALKER);
        const DATA_TALKER = JSON.parse(DATA);
        return DATA_TALKER;
    } catch (error) {
        console.log(`Erro na leitura do arquivo: ${error}`);
    }
}

module.exports = {
    talkerRead,
};

// requisito 1 e 2 segui o gabarito da aula do dia 2
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/2ed87e4f-9049-4314-8091-8f71b1925cf6/day/4982a599-9832-419e-a96b-3fe1db634c3e/lesson/9caf3f05-59f1-4959-8f92-bfe0ff66f49c/solution
// entretanto ele não passava no teste, li algo de middleware em um dos erros e resolvi "refatorar" para este arquivo