const express = require('express');
const QuotesControllers = require('./controllers/queenQuotes');
const app = express();
const cors = require('cors');

app.use(cors());

app.post('/queenQuotes', QuotesControllers.create);

app.get('/queenQuotes', QuotesControllers.list);

module.exports = app;
