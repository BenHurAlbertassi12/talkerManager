const express = require('express');
const bodyParser = require('body-parser');
const talker = require('./router/talker');
const login = require('./router/login');

// veio pronto
const app = express();
app.use(express.json());

// adicionado para requisitos do projeto 1 e 3
app.use(bodyParser.json());
app.use('/talker', talker);
app.use('/login', login);

// veio pronto
const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// veio pronto
app.listen(PORT, () => {
  console.log('Online');
});
