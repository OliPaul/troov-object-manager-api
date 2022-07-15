let express = require('express');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
