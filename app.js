const express = require('express');
const quotesControllers = require('./controllers/quotes');
const app = express();
const cors = require('cors');

app.use(cors());

app.post('/QueenQuotes', quotesControllers.create);

app.get('/QueenQuotes', quotesControllers.list);

module.exports = app;
