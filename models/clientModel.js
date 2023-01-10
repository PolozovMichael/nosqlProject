const mongoose = require('mongoose');
const clientSchema = require('../schemas/clientSchema');
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;