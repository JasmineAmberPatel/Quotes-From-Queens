const mongoose = require('mongoose');
const {  Schema } = require('mongoose');

const quotesSchema = new Schema({
    statement: String,
});

const Quotes = mongoose.model('Quotes', quotesSchema);

module.exports = Quotes;