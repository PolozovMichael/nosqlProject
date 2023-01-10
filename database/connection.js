const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const connect = () => {
    mongoose.connect(process.env.URI)
        .then(() => console.log('Connected to MongoDB!'))
        .catch((e) => console.error(e.message));
}

module.exports = connect;