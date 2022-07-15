let express = require('express');
let logger = require('morgan');

let register = require('./authentication/infra/controllers/Register');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/register', register);

module.exports = app;
