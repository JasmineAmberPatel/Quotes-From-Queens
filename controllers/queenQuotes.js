const QueenQuotes = require('../models/queenQuotes');

exports.create = (req, res) => {
    const queenQuotes = new QueenQuotes({
        statement: req.body.statement,
        author: req.body.author
    });
    queenQuotes.save().then(() => {
        res.status(201).json(queenQuotes);
    });
};

exports.list = (req, res) => {
    QueenQuotes.find({}, (err, queenQuotes) => {
        res.status(200).send(queenQuotes);
    });
};
