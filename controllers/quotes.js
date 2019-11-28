const Quotes = require('../models/quotes');

exports.create = (req, res) => {
    const quotes = new Quotes({
        statement: req.body.statement,
    });
    quotes.save().then(() => {
        res.status(201).json(quotes);
    });
};

exports.list = (req, res) => {
    Quotes.find({}, (err, quotes) => {
        res.status(200).send(quotes);
    });
};
