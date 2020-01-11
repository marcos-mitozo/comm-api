const bodyParser = require('body-parser');
const express = require('express');

var app = express();

const register = require('./routes/register');
const listar = require('./routes/list');

app.use(bodyParser.json());
app.use('/register', register);
app.use('/listar', listar);

app.listen(8001, function () {
    console.log('Servidor rodando na porta 8001.');
});