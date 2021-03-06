var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Conexão com o banco de dados
const db = require('./config/database');
db('mongodb://127.0.0.1:27017/4not-2019-1');
//4not-2019-1
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

let teste = require('./routes/teste');
app.use('/teste', teste);

const veiculo = require('./routes/veiculo');
app.use('/veiculo', veiculo);

const usuario = require('./routes/usuario');
app.use('/usuario', usuario);

const conta = require('./routes/conta');
app.use('/conta', conta);

const tipo = require('./routes/tipo');
app.use('/tipo', tipo);

const marca = require('./routes/marca');
app.use('/marca', marca);

const cor = require('./routes/cor');
app.use('/cor', cor);

const combustivel = require('./routes/combustivel');
app.use('/combustivel', combustivel);

const modelo = require('./routes/modelo');
app.use('/modelo', modelo);

module.exports = app;
