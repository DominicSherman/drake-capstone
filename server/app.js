const express = require('express');
const expressSession = require('express-session');
const cors = require('cors');

const app = express();

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat'
}));
app.use(cors());

module.exports = {app};
