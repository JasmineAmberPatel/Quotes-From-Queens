const mongoose = require('mongoose');
const {  Schema } = require('mongoose');

const quotesSchema = new Schema({
    statement: String,
    author: String
});

const QueenQuotes = mongoose.model('QueenQuotes', quotesSchema);

module.exports = QueenQuotes;