let express = require('express');
let logger = require('morgan');

let register = require('./authentication/infra/controllers/Register');
let signIn = require('./authentication/infra/controllers/SignIn');
let item = require('./item/infra/controllers/ItemContoller');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/register', register);
app.use('/sign_in', signIn);
app.use('/item', item.find);
app.use('/item/store', item.store);

module.exports = app;
