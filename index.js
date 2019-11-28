const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(mongoose.connect);
    app.listen(process.env.PORT || 8080);
});